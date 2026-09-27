/**
 * Survey Toolbox - Application Controller
 * Handles Grid Rendering, Live Search, Category Filtering, 3-Tab Modal Drawer, 
 * Real-time Calculation Data Integration, and Bilingual i18n Localization.
 */

// Application State
const state = {
  currentLang: 'th',
  selectedCategory: 'all',
  searchQuery: '',
  activeTool: null,
  activeTab: 'overview'
};

/**
 * HTML Escaping Utility for XSS Prevention
 */
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  try {
    const savedLang = localStorage.getItem('surveytoolbox_lang');
    if (savedLang === 'en' || savedLang === 'th') {
      state.currentLang = savedLang;
      document.documentElement.lang = savedLang;
    }
  } catch (e) {
    // Graceful fallback if localStorage is disabled or restricted
  }

  syncLangButtons(state.currentLang);

  renderCategoryPills();
  renderToolCards();
  setupSearch();
  setupModalEvents();
  setupNavigation();
  updateI18n();

  // Initialize AOS animations if library loaded
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 600, once: true, offset: 80 });
  }
}

/**
 * Category Filter Rendering
 */
function renderCategoryPills() {
  const container = document.getElementById('category-pills-container');
  if (!container) return;

  const lang = state.currentLang;
  container.innerHTML = categoriesData.map(cat => {
    const isActive = state.selectedCategory === cat.id;
    const name = lang === 'th' ? cat.nameTh : cat.nameEn;
    return `
      <button 
        onclick="selectCategory('${cat.id}')"
        class="cat-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border flex items-center gap-2 transition-all ${
          isActive 
            ? 'active bg-slate-900 text-white border-transparent shadow-md' 
            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
        }"
        id="cat-pill-${cat.id}"
      >
        <i class="${cat.icon} text-xs"></i>
        <span>${name}</span>
        <span class="px-1.5 py-0.5 rounded-full text-[10px] ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'} font-mono">${cat.count}</span>
      </button>
    `;
  }).join('');
}

function selectCategory(catId) {
  state.selectedCategory = catId;
  renderCategoryPills();
  renderToolCards();
}

/**
 * Search Logic & Event Binding
 */
function setupSearch() {
  const searchInput = document.getElementById('tool-search-input');
  const clearBtn = document.getElementById('search-clear-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        if (state.searchQuery.length > 0) {
          clearBtn.classList.remove('hidden');
        } else {
          clearBtn.classList.add('hidden');
        }
      }
      renderToolCards();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        state.searchQuery = '';
        clearBtn.classList.add('hidden');
        renderToolCards();
        searchInput.focus();
      }
    });
  }
}

/**
 * 21 Tool Cards Grid Rendering
 */
function renderToolCards() {
  const grid = document.getElementById('tools-grid');
  const countIndicator = document.getElementById('search-count-chip');
  const emptyState = document.getElementById('tools-empty-state');
  if (!grid) return;

  const lang = state.currentLang;
  const query = state.searchQuery;

  // Filter tools by category and search keyword
  const filteredTools = surveyToolsData.filter(tool => {
    const matchCategory = state.selectedCategory === 'all' || tool.category === state.selectedCategory;
    
    let matchQuery = true;
    if (query) {
      const q = query.toLowerCase();
      const numStr = `#${tool.num}`;
      const numPlain = `${tool.num}`;
      const nameTh = (tool.nameTh || '').toLowerCase();
      const nameEn = (tool.nameEn || '').toLowerCase();
      const subTh = (tool.subtitleTh || '').toLowerCase();
      const subEn = (tool.subtitleEn || '').toLowerCase();
      const cat = (tool.category || '').toLowerCase();
      const keywords = Array.isArray(tool.keywords) ? tool.keywords.map(k => String(k).toLowerCase()).join(' ') : '';
      const hlTh = Array.isArray(tool.highlightsTh) ? tool.highlightsTh.join(' ').toLowerCase() : '';
      const hlEn = Array.isArray(tool.highlightsEn) ? tool.highlightsEn.join(' ').toLowerCase() : '';

      matchQuery = nameTh.includes(q) ||
                   nameEn.includes(q) ||
                   subTh.includes(q) ||
                   subEn.includes(q) ||
                   cat.includes(q) ||
                   numStr === q ||
                   numPlain === q ||
                   keywords.includes(q) ||
                   hlTh.includes(q) ||
                   hlEn.includes(q);
    }

    return matchCategory && matchQuery;
  });

  // Update count chip
  if (countIndicator) {
    const countTemplate = translations[lang].search_count || 'พบ {count} เครื่องมือ';
    countIndicator.innerText = countTemplate.replace('{count}', filteredTools.length);
  }

  // Handle empty state
  if (filteredTools.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  } else {
    if (emptyState) emptyState.classList.add('hidden');
  }

  // Render cards
  grid.innerHTML = filteredTools.map(tool => {
    const numFmt = String(tool.num).padStart(2, '0');
    const title = lang === 'th' ? tool.nameTh : tool.nameEn;
    const subtitle = lang === 'th' ? tool.subtitleTh : tool.subtitleEn;
    const summary = lang === 'th' ? tool.summaryTh : tool.summaryEn;
    const badgeTier = tool.isPro 
      ? `<span class="badge-pro text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"><i class="fa-solid fa-crown text-[10px]"></i> PRO</span>`
      : `<span class="badge-free text-[11px] font-bold px-2 py-0.5 rounded-full">FREE</span>`;

    // Category badge color
    const catClass = `cat-tag-${tool.category}`;
    const catName = categoriesData.find(c => c.id === tool.category);
    const catLabel = catName ? (lang === 'th' ? catName.nameTh : catName.nameEn) : tool.category;

    return `
      <div 
        class="tool-card bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
        onclick="openToolModal('${tool.id}')"
        data-tool-id="${tool.id}"
      >
        <!-- Top accent category line -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-400 opacity-80 group-hover:opacity-100 transition-opacity"></div>

        <div>
          <!-- Header: Num, Category Tag, Pro/Free Badge -->
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">#${numFmt}</span>
            <div class="flex items-center gap-2">
              <span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${catClass}">${catLabel}</span>
              ${badgeTier}
            </div>
          </div>

          <!-- Icon & Titles -->
          <div class="flex items-start gap-4 mb-3">
            <div class="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 text-lg group-hover:bg-[#FF5722] group-hover:text-white transition-colors duration-200 shrink-0">
              <i class="${tool.icon}"></i>
            </div>
            <div class="min-w-0">
              <h3 class="font-heading font-bold text-slate-900 text-base sm:text-lg group-hover:text-[#FF5722] transition-colors leading-snug truncate">
                ${title}
              </h3>
              <p class="text-xs text-slate-400 font-medium truncate mt-0.5">
                ${subtitle}
              </p>
            </div>
          </div>

          <!-- Summary Body -->
          <p class="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
            ${summary}
          </p>
        </div>

        <!-- Footer Trigger Button -->
        <div class="pt-4 border-t border-slate-100">
          <button 
            type="button"
            class="w-full py-2.5 px-4 bg-slate-50 group-hover:bg-[#FF5722] text-slate-700 group-hover:text-white font-semibold text-xs rounded-xl transition-all duration-200 flex items-center justify-between border border-slate-200 group-hover:border-transparent"
          >
            <span>${translations[lang].card_view_manual}</span>
            <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * 3-Tab Comprehensive Tool Detail Modal
 */
function openToolModal(toolId) {
  const tool = surveyToolsData.find(t => t.id === toolId);
  if (!tool) return;

  state.activeTool = tool;
  state.activeTab = 'overview';

  const modal = document.getElementById('tool-modal');
  if (!modal) return;

  // Sync language buttons inside modal
  syncLangButtons(state.currentLang);

  // Render Modal Header
  renderModalHeader();
  // Render Active Tab Content
  renderModalTabContent();
  // Set tab buttons active
  updateModalTabButtons();

  // Show Modal
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeToolModal() {
  const modal = document.getElementById('tool-modal');
  if (!modal) return;

  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = 'auto';
  state.activeTool = null;
}

function switchModalTab(tabId) {
  state.activeTab = tabId;
  updateModalTabButtons();
  renderModalTabContent();
  const container = document.getElementById('modal-tab-body');
  if (container) {
    container.scrollTop = 0;
  }
}

function updateModalTabButtons() {
  const buttons = document.querySelectorAll('.modal-tab-btn');
  buttons.forEach(btn => {
    const tab = btn.getAttribute('data-tab');
    if (tab === state.activeTab) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function renderModalHeader() {
  const tool = state.activeTool;
  if (!tool) return;
  const lang = state.currentLang;

  const numFmt = String(tool.num).padStart(2, '0');
  const title = lang === 'th' ? tool.nameTh : tool.nameEn;
  const subtitle = lang === 'th' ? tool.subtitleTh : tool.subtitleEn;
  const cat = categoriesData.find(c => c.id === tool.category);
  const catLabel = cat ? (lang === 'th' ? cat.nameTh : cat.nameEn) : tool.category;

  document.getElementById('modal-tool-num').innerText = `#${numFmt}`;
  document.getElementById('modal-tool-cat').innerText = catLabel;
  document.getElementById('modal-tool-title').innerText = title;
  document.getElementById('modal-tool-subtitle').innerText = subtitle;

  const badgeElem = document.getElementById('modal-tool-tier');
  if (badgeElem) {
    if (tool.isPro) {
      badgeElem.innerHTML = `<span class="badge-pro text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1"><i class="fa-solid fa-crown text-[10px]"></i> PRO</span>`;
    } else {
      badgeElem.innerHTML = `<span class="badge-free text-xs font-bold px-2.5 py-0.5 rounded-full">FREE</span>`;
    }
  }

  // Sync in-modal language buttons if present
  const mBtnTh = document.getElementById('modal-btn-th');
  const mBtnEn = document.getElementById('modal-btn-en');
  if (mBtnTh && mBtnEn) {
    if (lang === 'th') {
      mBtnTh.className = 'px-2 py-1 rounded-md transition-colors bg-white text-slate-900 shadow-xs font-bold';
      mBtnEn.className = 'px-2 py-1 rounded-md transition-colors text-slate-600 hover:text-slate-900 font-medium';
    } else {
      mBtnEn.className = 'px-2 py-1 rounded-md transition-colors bg-white text-slate-900 shadow-xs font-bold';
      mBtnTh.className = 'px-2 py-1 rounded-md transition-colors text-slate-600 hover:text-slate-900 font-medium';
    }
  }
}

function renderModalTabContent() {
  const tool = state.activeTool;
  const container = document.getElementById('modal-tab-body');
  if (!tool || !container) return;

  const lang = state.currentLang;
  const tab = state.activeTab;

  switch (tab) {
    case 'overview':
      container.innerHTML = `
        <div class="space-y-6">
          <div>
            <h4 class="font-heading font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
              <i class="fa-solid fa-circle-info text-blue-500"></i>
              ${lang === 'th' ? 'ข้อ 1. คำอธิบายฟังก์ชันและการประยุกต์ใช้งาน' : '1. Function Description & Applications'}
            </h4>
            <p class="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              ${lang === 'th' ? tool.overviewTh : tool.overviewEn}
            </p>
          </div>

          <div>
            <h4 class="font-heading font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
              <i class="fa-solid fa-certificate text-amber-500"></i>
              ${lang === 'th' ? 'มาตรฐานอ้างอิงทางวิศวกรรม' : 'Authoritative Engineering Standard'}
            </h4>
            <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 font-medium">
              ${lang === 'th' ? tool.standardTh : tool.standardEn}
            </div>
          </div>

          ${(() => {
            const rawPrimary = lang === 'th' ? tool.highlightsTh : tool.highlightsEn;
            const rawFallback = lang === 'th' ? tool.highlightsEn : tool.highlightsTh;
            const cleanList = (arr) => Array.isArray(arr) ? arr.filter(item => typeof item === 'string' && item.trim().length > 0).map(item => item.trim()) : [];
            let validList = cleanList(rawPrimary);
            if (validList.length === 0) {
              validList = cleanList(rawFallback);
            }
            if (validList.length === 0) {
              return '';
            }
            const headingText = (translations[lang] && translations[lang].modal_highlights_heading) 
              ? translations[lang].modal_highlights_heading 
              : (lang === 'th' ? 'ฟังก์ชันเด่นสำคัญ' : 'Key Module Highlights');

            return `
              <div>
                <h4 class="font-heading font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                  <i class="fa-solid fa-bolt text-[#FF5722]"></i>
                  ${escapeHtml(headingText)}
                </h4>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                  ${validList.map(hl => `
                    <li class="flex items-start gap-2.5 bg-white border border-slate-200 p-3 rounded-xl shadow-sm min-w-0">
                      <i class="fa-solid fa-check text-emerald-500 mt-0.5 shrink-0"></i>
                      <span class="leading-relaxed break-words text-slate-700 min-w-0 flex-1">${escapeHtml(hl)}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `;
          })()}
        </div>
      `;
      break;

    case 'params':
      container.innerHTML = `
        <div class="space-y-6">
          <div>
            <h4 class="font-heading font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
              <i class="fa-solid fa-arrow-right-to-bracket text-blue-500"></i>
              ${lang === 'th' ? 'ข้อ 2. พารามิเตอร์นำเข้า (Input Parameters)' : '2. Input Parameters Specification'}
            </h4>
            <div class="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
              <table class="w-full text-left text-xs text-slate-600">
                <thead class="bg-slate-50 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th class="p-3">#</th>
                    <th class="p-3">${lang === 'th' ? 'ชื่อพารามิเตอร์' : 'Parameter'}</th>
                    <th class="p-3">${lang === 'th' ? 'หน่วย' : 'Unit'}</th>
                    <th class="p-3">${lang === 'th' ? 'ชนิดข้อมูล' : 'Type'}</th>
                    <th class="p-3">${lang === 'th' ? 'คำอธิบาย' : 'Description'}</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${tool.inputs.map((inp, idx) => `
                    <tr class="hover:bg-slate-50/50">
                      <td class="p-3 font-mono text-slate-400">${idx + 1}</td>
                      <td class="p-3 font-semibold text-slate-800">${lang === 'th' ? inp.labelTh : inp.labelEn}</td>
                      <td class="p-3 font-mono text-blue-600">${inp.unit || '-'}</td>
                      <td class="p-3 font-mono text-slate-500">${inp.type || 'number'}</td>
                      <td class="p-3 text-slate-500">${inp.id} (default: ${inp.default !== undefined ? inp.default : '-'})</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 class="font-heading font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
              <i class="fa-solid fa-arrow-right-from-bracket text-emerald-500"></i>
              ${lang === 'th' ? 'ผลลัพธ์การคำนวณ (Output Parameters)' : 'Output Parameters Specification'}
            </h4>
            <div class="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
              <table class="w-full text-left text-xs text-slate-600">
                <thead class="bg-slate-50 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th class="p-3">#</th>
                    <th class="p-3">${lang === 'th' ? 'ผลลัพธ์' : 'Output'}</th>
                    <th class="p-3">${lang === 'th' ? 'หน่วย' : 'Unit'}</th>
                    <th class="p-3">${lang === 'th' ? 'รหัสตัวแปร' : 'Variable ID'}</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${tool.outputs.map((out, idx) => `
                    <tr class="hover:bg-slate-50/50">
                      <td class="p-3 font-mono text-slate-400">${idx + 1}</td>
                      <td class="p-3 font-semibold text-slate-800">${lang === 'th' ? out.labelTh : out.labelEn}</td>
                      <td class="p-3 font-mono text-emerald-600">${out.unit || '-'}</td>
                      <td class="p-3 font-mono text-slate-500">${out.id}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
      break;

    case 'formula':
      container.innerHTML = `
        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <h4 class="font-heading font-bold text-slate-800 text-base flex items-center gap-2">
              <i class="fa-solid fa-square-root-variable text-[#FF5722]"></i>
              ${lang === 'th' ? 'สมการและตรรกะการคำนวณทางคณิตศาสตร์' : 'Mathematical Formulas & Rigorous Derivation'}
            </h4>
            <button 
              onclick="copyActiveFormula()" 
              class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
            >
              <i class="fa-regular fa-copy"></i>
              <span id="copy-formula-btn-text">${translations[lang].modal_btn_copy_formula}</span>
            </button>
          </div>

          <!-- Math Card LaTeX -->
          <div>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">LaTeX Mathematical Notation:</span>
            <div class="math-card text-emerald-400 shadow-inner">
              <pre class="whitespace-pre-wrap font-mono text-xs leading-relaxed">${tool.formulas.latex}</pre>
            </div>
          </div>

          <!-- Plain Text Logic -->
          <div>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Plain Field Arithmetic Logic:</span>
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl font-mono text-xs text-slate-700 leading-relaxed shadow-sm">
              <pre class="whitespace-pre-wrap">${tool.formulas.plain}</pre>
            </div>
          </div>
        </div>
      `;
      break;

    case 'steps':
      const steps = lang === 'th' ? tool.stepsTh : tool.stepsEn;
      container.innerHTML = `
        <div class="space-y-4">
          <h4 class="font-heading font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-emerald-500"></i>
            ${lang === 'th' ? 'ข้อ 3. ขั้นตอนการทำงาน (Step-by-Step)' : '3. Field Operating Procedure (Step-by-Step)'}
          </h4>
          <div class="space-y-3">
            ${steps.map((step, idx) => `
              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-orange-300 transition-colors">
                <span class="w-6 h-6 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ${idx + 1}
                </span>
                <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  ${step}
                </p>
              </div>
            `).join('')}
          </div>
          ${tool.tipsTh ? `
            <div class="mt-4 pt-3 border-t border-slate-200">
              <div class="bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-amber-900 text-xs leading-relaxed">
                <div class="font-bold flex items-center gap-1.5 mb-1 text-amber-800">
                  <i class="fa-solid fa-triangle-exclamation text-amber-600"></i>
                  ${lang === 'th' ? 'ข้อควรระวังภาคสนาม' : 'Field Surveyor Tips & Caveats'}
                </div>
                ${lang === 'th' ? tool.tipsTh : tool.tipsEn}
              </div>
            </div>
          ` : ''}
        </div>
      `;
      break;

    case 'simulator':
      container.innerHTML = `
        <div class="space-y-6">
          <!-- Concrete Numerical Example Notice -->
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-xl">
            <h4 class="font-bold text-xs text-blue-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-lightbulb text-blue-600"></i>
              ${lang === 'th' ? 'ตัวอย่างการคำนวณจริง (Worked Numerical Example)' : 'Worked Numerical Example'}
            </h4>
            <p class="text-xs text-blue-800 leading-relaxed">
              ${lang === 'th' ? tool.example.descTh : tool.example.descEn}
            </p>
          </div>

          <!-- Interactive Simulator Form -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
              <h4 class="font-heading font-bold text-slate-800 text-sm flex items-center gap-2">
                <i class="fa-solid fa-calculator text-[#FF5722]"></i>
                ${lang === 'th' ? 'ระบบจำลองการคำนวณสด (Live Interactive Simulator)' : 'Live Interactive Calculation Sandbox'}
              </h4>
              <button 
                onclick="resetSimulatorDefaults()"
                class="text-xs text-slate-500 hover:text-slate-800 font-semibold underline"
              >
                ${translations[lang].modal_sim_reset}
              </button>
            </div>

            <!-- Dynamic Inputs Grid -->
            <form id="tool-simulator-form" onsubmit="event.preventDefault(); executeSimulator();">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                ${tool.inputs.map(inp => `
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1 truncate">
                      ${lang === 'th' ? inp.labelTh : inp.labelEn}
                      <span class="text-slate-400 font-normal">(${inp.unit || '-'})</span>
                    </label>
                    <input 
                      type="${inp.type === 'number' ? 'number' : 'text'}"
                      id="sim-input-${inp.id}"
                      value="${inp.default !== undefined ? inp.default : ''}"
                      step="${inp.step || 'any'}"
                      min="${inp.min !== undefined ? inp.min : ''}"
                      max="${inp.max !== undefined ? inp.max : ''}"
                      class="sim-input w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-mono text-slate-800 focus:outline-none focus:border-[#FF5722]"
                    />
                  </div>
                `).join('')}
              </div>

              <div class="flex justify-end">
                <button 
                  type="button"
                  onclick="executeSimulator()"
                  class="px-5 py-2.5 bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs rounded-xl shadow-md transition-all transform hover:scale-[1.02] flex items-center gap-2"
                >
                  <i class="fa-solid fa-play"></i>
                  ${translations[lang].modal_sim_run}
                </button>
              </div>
            </form>

            <!-- Live Calculation Results Area -->
            <div class="mt-6 pt-4 border-t border-slate-200">
              <h5 class="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                ${translations[lang].modal_sim_result_heading}
              </h5>
              <div id="simulator-output-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <!-- Calculated output cards will be injected here -->
              </div>
            </div>
          </div>
        </div>
      `;
      // Auto-run simulation once on tab open
      executeSimulator();
      break;

    case 'tips':
      container.innerHTML = `
        <div class="space-y-6">
          <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900">
            <h4 class="font-heading font-bold text-sm mb-2 flex items-center gap-2 text-amber-800">
              <i class="fa-solid fa-triangle-exclamation text-amber-600"></i>
              ${lang === 'th' ? 'ข้อควรระวังภาคสนามที่พบบ่อย' : 'Common Field Pitfalls & Quality Control'}
            </h4>
            <p class="text-xs leading-relaxed">
              ${lang === 'th' ? tool.tipsTh : tool.tipsEn}
            </p>
          </div>

          <div>
            <h4 class="font-heading font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
              <i class="fa-solid fa-shield-halved text-emerald-600"></i>
              ${lang === 'th' ? 'เกณฑ์การตรวจสอบและการยอมรับ (Tolerance Rules)' : 'Engineering Tolerance Thresholds'}
            </h4>
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs text-slate-700 leading-relaxed font-medium">
              <i class="fa-solid fa-check-double text-emerald-500 mr-1.5"></i>
              ${lang === 'th' ? (tool.toleranceTh || 'เป็นไปตามข้อกำหนดวิศวกรรมสากล') : (tool.toleranceEn || 'Conforms to international geomatics standards.')}
            </div>
          </div>
        </div>
      `;
      break;
  }
}

/**
 * Live Simulator Execution
 */
function executeSimulator() {
  const tool = state.activeTool;
  if (!tool || !tool.calculate) return;

  const inputs = {};
  tool.inputs.forEach(inp => {
    const el = document.getElementById(`sim-input-${inp.id}`);
    if (el) {
      inputs[inp.id] = inp.type === 'number' ? parseFloat(el.value) || 0 : el.value;
    }
  });

  try {
    const results = tool.calculate(inputs);
    const outputGrid = document.getElementById('simulator-output-grid');
    if (!outputGrid) return;

    const lang = state.currentLang;
    outputGrid.innerHTML = tool.outputs.map(out => {
      const val = results[out.id] !== undefined ? results[out.id] : '-';
      const label = lang === 'th' ? out.labelTh : out.labelEn;
      const isPass = String(val).includes('PASS');
      const isFail = String(val).includes('FAIL');
      let colorClass = 'bg-white text-slate-800 border-slate-200';
      if (isPass) colorClass = 'bg-emerald-50 text-emerald-900 border-emerald-300 font-bold';
      if (isFail) colorClass = 'bg-rose-50 text-rose-900 border-rose-300 font-bold';

      return `
        <div class="p-3 rounded-xl border ${colorClass} shadow-sm flex flex-col justify-between">
          <span class="text-[11px] text-slate-500 block mb-1 truncate">${label}</span>
          <span class="font-mono text-sm font-semibold tracking-tight">${val}</span>
        </div>
      `;
    }).join('');
  } catch (err) {
    console.error('Calculation Simulator error:', err);
  }
}

function resetSimulatorDefaults() {
  const tool = state.activeTool;
  if (!tool) return;
  tool.inputs.forEach(inp => {
    const el = document.getElementById(`sim-input-${inp.id}`);
    if (el && inp.default !== undefined) {
      el.value = inp.default;
    }
  });
  executeSimulator();
}

/**
 * Copy Formula to Clipboard
 */
function copyActiveFormula() {
  const tool = state.activeTool;
  if (!tool) return;

  const formulaText = `${tool.formulas.plain}\n\nLaTeX: ${tool.formulas.latex}`;
  navigator.clipboard.writeText(formulaText).then(() => {
    showToast(translations[state.currentLang].modal_btn_copied);
  }).catch(() => {
    // Fallback if clipboard API restricted
    showToast('Copied to clipboard!');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-notification-text');
  if (!toast || !toastText) return;

  toastText.innerText = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/**
 * Modal Event Listeners
 */
function setupModalEvents() {
  const modal = document.getElementById('tool-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeToolModal);
  }

  // Backdrop click to close
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeToolModal();
      }
    });
  }

  // ESC key to close modal & Left/Right arrow keys to switch tabs (UI Spec § 6.2)
  const modalTabs = ['overview', 'params', 'steps'];
  window.addEventListener('keydown', (e) => {
    if (!state.activeTool) return;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

    if (e.key === 'Escape') {
      closeToolModal();
    } else if (e.key === 'ArrowRight') {
      const curIdx = modalTabs.indexOf(state.activeTab);
      if (curIdx >= 0 && curIdx < modalTabs.length - 1) {
        switchModalTab(modalTabs[curIdx + 1]);
      }
    } else if (e.key === 'ArrowLeft') {
      const curIdx = modalTabs.indexOf(state.activeTab);
      if (curIdx > 0) {
        switchModalTab(modalTabs[curIdx - 1]);
      }
    }
  });
}

/**
 * Bilingual i18n Switcher
 */
function setLanguage(lang) {
  if (lang !== 'th' && lang !== 'en') return;
  state.currentLang = lang;
  document.documentElement.lang = lang;

  try {
    localStorage.setItem('surveytoolbox_lang', lang);
  } catch (e) {
    // Graceful fallback if localStorage is restricted
  }

  syncLangButtons(lang);
  updateI18n();
  renderCategoryPills();
  renderToolCards();

  if (state.activeTool) {
    renderModalHeader();
    renderModalTabContent();
  }
}

/**
 * Synchronize all UI language buttons across navbar and modal header
 */
function syncLangButtons(lang) {
  // Toggle navbar button styles
  const btnTh = document.getElementById('btn-th');
  const btnEn = document.getElementById('btn-en');
  if (btnTh && btnEn) {
    if (lang === 'th') {
      btnTh.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEn.classList.add('active');
      btnTh.classList.remove('active');
    }
  }

  // Sync in-modal language buttons if present
  const mBtnTh = document.getElementById('modal-btn-th');
  const mBtnEn = document.getElementById('modal-btn-en');
  if (mBtnTh && mBtnEn) {
    if (lang === 'th') {
      mBtnTh.className = 'px-2 py-1 rounded-md transition-colors bg-white text-slate-900 shadow-xs font-bold';
      mBtnEn.className = 'px-2 py-1 rounded-md transition-colors text-slate-600 hover:text-slate-900 font-medium';
    } else {
      mBtnEn.className = 'px-2 py-1 rounded-md transition-colors bg-white text-slate-900 shadow-xs font-bold';
      mBtnTh.className = 'px-2 py-1 rounded-md transition-colors text-slate-600 hover:text-slate-900 font-medium';
    }
  }
}

function updateI18n() {
  const lang = state.currentLang;
  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  // Update placeholders
  const searchInput = document.getElementById('tool-search-input');
  if (searchInput && dict.search_placeholder) {
    searchInput.placeholder = dict.search_placeholder;
  }
}

/**
 * Mobile Navigation & Smooth Scroll
 */
function setupNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });
  }
}

function scrollToSection(id, e) {
  if (e && e.preventDefault) e.preventDefault();

  // If a modal drawer is currently open, dismiss it cleanly first
  if (state.activeTool) {
    closeToolModal();
  }

  const targetElement = document.getElementById(id);
  if (targetElement) {
    const nav = document.querySelector('nav');
    const navHeight = nav ? nav.offsetHeight : 80;
    const pos = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: pos, behavior: 'smooth' });
  }

  // Close mobile menu if open
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  }
}

function printToolManual() {
  window.print();
}
