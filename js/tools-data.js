/**
 * Survey Toolbox - Comprehensive 21-Tool Data & Localization Engine
 * Standard References: WGS84 Ellipsoid, UTM Projection (Redfearn Series), ISO 17123-5, LandXML 1.2
 */

const categoriesData = [
  { id: "all", nameTh: "ทั้งหมด", nameEn: "All Tools", count: 21, icon: "fa-solid fa-shapes", color: "slate" },
  { id: "coord", nameTh: "พิกัด & ทิศทาง", nameEn: "Coordinate & Direction", count: 3, icon: "fa-solid fa-compass", color: "blue" },
  { id: "curve", nameTh: "โค้ง & สายทาง", nameEn: "Curve & Alignment", count: 3, icon: "fa-solid fa-route", color: "purple" },
  { id: "offset", nameTh: "วางผัง & ออฟเซ็ต", nameEn: "Setting Out & Offsets", count: 3, icon: "fa-solid fa-crosshairs", color: "amber" },
  { id: "geodesy", nameTh: "วงรอบ & ยีโอเดซี", nameEn: "Traverse & Geodesy", count: 4, icon: "fa-solid fa-earth-asia", color: "teal" },
  { id: "level", nameTh: "งานระดับ", nameEn: "Elevation & Leveling", count: 1, icon: "fa-solid fa-ruler-vertical", color: "indigo" },
  { id: "field_util", nameTh: "เครื่องมือสนาม & QC", nameEn: "Field Tools & QC", count: 7, icon: "fa-solid fa-toolbox", color: "emerald" }
];

const translations = {
  th: {
    brand_title: "Survey Toolbox",
    brand_tagline: "",
    nav_home: "หน้าแรก",
    nav_manual: "คู่มือการใช้งาน",
    nav_video: "วิดีโอสาธิต",
    nav_features: "จุดเด่น",
    nav_audience: "กลุ่มผู้ใช้งาน",
    nav_faq: "คำถามที่พบบ่อย",
    nav_privacy: "นโยบายความเป็นส่วนตัว",
    nav_terms: "ข้อตกลงการใช้งาน",
    btn_ios: "iOS (App Store)",
    btn_android: "Android (Play Store)",

    hero_badge: "เครื่องมืออันดับ 1 สำหรับช่างสำรวจ",
    hero_title_1: "ยกระดับงานสำรวจสู่มาตรฐานสากล",
    hero_title_2: "แม่นยำ รวดเร็ว ตอบโจทย์ทุกงานสำรวจ",
    hero_desc: "เปลี่ยนสมาร์ทโฟนและแท็บเล็ตของคุณให้เป็นเครื่องคำนวณงานสำรวจภาคสนาม ครอบคลุมตั้งแต่งานตรวจสอบเสาเข็มเยื้องศูนย์ วางแนวโค้งถนน แปลงพิกัด GeoUTM งานระดับ จนถึงการสอบเทียบกล้องตามมาตรฐาน ISO 17123-5 ทำงานออฟไลน์ 100% ไร้กังวลแม้ไม่มีสัญญาณเน็ต",
    hero_btn_explore: "สำรวจคู่มือการใช้งาน",
    hero_btn_download: "ดาวน์โหลดแอปฟรี",

    stat_tools_num: "21",
    stat_tools_label: "เครื่องมือคำนวณครบครัน",
    stat_offline_num: "100%",
    stat_offline_label: "ทำงานออฟไลน์ไม่ง้อเน็ต",
    stat_precision_num: "พิกัด & ระยะ",
    stat_precision_label: "คำนวณพิกัดและระยะทางความแม่นยำสูง",
    stat_iso_num: "รายงานสรุป",
    stat_iso_label: "รายงานสรุปผลการคำนวณและตรวจสอบ",

    manual_badge: "GUIDES & DOCUMENTATION",
    manual_title: "คู่มือการใช้งาน 21 เครื่องมือสำรวจ",
    manual_subtitle: "เอกสารคู่มือทางเทคนิค คำอธิบายฟังก์ชัน พารามิเตอร์ และขั้นตอนการทำงาน",
    search_placeholder: "ค้นหาเครื่องมือสำรวจ (เช่น รีเช็คชั่น, โค้งราบ, Azimuth, พิกัด, Collimation, #1 - #21)...",
    search_count: "พบ {count} เครื่องมือที่ตรงกับการค้นหา",
    search_hint: "คลิกการ์ดเพื่อดูคู่มือการใช้งาน",
    search_clear: "ล้างการค้นหา",
    search_empty_title: "ไม่พบเครื่องมือที่ค้นหา",
    search_empty_desc: "ลองค้นหาด้วยคำอื่น หรือเลือกหมวดหมู่ \"ทั้งหมด\" เพื่อดูเครื่องมือครบทั้ง 21 รายการ",

    card_view_manual: "ดูคู่มือการใช้งาน",
    card_badge_free: "FREE",
    card_badge_pro: "PRO",

    modal_tab_overview: "ข้อ 1. คำอธิบายฟังก์ชัน",
    modal_tab_params: "ข้อ 2. พารามิเตอร์ (Input/Output)",
    modal_tab_formula: "",
    modal_tab_steps: "ข้อ 3. ขั้นตอนการทำงาน (Step-by-Step)",
    modal_tab_simulator: "",
    modal_tab_tips: "",
    modal_highlights_heading: "ฟังก์ชันเด่นสำคัญ",

    modal_btn_copy_formula: "คัดลอกสูตร",
    modal_btn_copied: "คัดลอกสูตรแล้ว!",
    modal_btn_print: "พิมพ์ / ส่งออก PDF",
    modal_btn_close: "ปิดหน้าต่าง",
    modal_sim_run: "คำนวณผลลัพธ์ทันที",
    modal_sim_reset: "รีเซ็ตค่าเริ่มต้น",
    modal_sim_result_heading: "ผลการคำนวณจริง (Real-time Calculated Outputs):",

    feat_header: "FEATURE HIGHLIGHTS",
    feat_title: "ฟังก์ชันทรงพลังสำหรับมืออาชีพ",
    f1_title: "Azimuth & Distance",
    f1_desc: "คำนวณหาทิศทางและระยะทางอย่างแม่นยำ (Inverse Geometry) สลับหน่วย DMS ทศนิยม",
    f2_title: "Deviation Check",
    f2_desc: "ตรวจสอบค่าความคลาดเคลื่อนเทียบกับแบบ (Design vs Actual) พร้อมแยกแนวแกนและไฮไลต์เตือนสีแดง",
    f3_title: "Smart Field Geometry",
    f3_desc: "วางโค้งราบ H-Curve, โค้งดิ่ง V-Curve, รีเช็คชั่น 2 จุด และออฟเซ็ตผังคอกอย่างรวดเร็ว",
    f4_title: "Export & Compliance",
    f4_desc: "ส่งออกรายงาน PDF พร้อมบล็อกลงนาม 3 ฝ่าย, แผนภาพ CAD และใบรับรองสอบเทียบ ISO 17123-5",

    aud_title: "Survey Toolbox เหมาะกับใคร?",
    aud_subtitle: "ออกแบบเพื่อรองรับทุกลำดับขั้นในงานวิศวกรรมสำรวจและก่อสร้าง",
    p1_title: "ช่างสำรวจภาคสนาม (Field Surveyors)",
    p1_desc: "ลดภาระการพกสมุดจด ตรวจสอบค่าได้ทันทีหน้างาน ไม่ต้องเสี่ยงกับการกดเครื่องคิดเลขผิดพลาดกลางแดดร้อน รังวัดเสร็จ ตรวจสอบความคลาดเคลื่อนและเซ็นอนุมัติส่งงานได้ทันที",
    p2_title: "วิศวกรและผู้ควบคุมงาน",
    p2_desc: "ตรวจสอบงานวางผังเสาเข็ม งานระดับดิน และแนวสายทาง LandXML ได้ด้วยตนเอง ไม่ต้องรอไฟล์ CAD พร้อมรายงาน PDF มาตรฐานสำหรับแนบส่งตรวจ",
    p3_title: "นักศึกษา",
    p3_desc: "เครื่องมือจำลองและเรียนรู้ทฤษฎีเรขาคณิตสำรวจ การฉายแผนที่ WGS84/UTM และกระบวนการสอบเทียบเครื่องมือวัดตามมาตรฐานสากล ISO",

    video_title: "วิดีโอแนะนำและสาธิตการใช้งาน Survey Toolbox",
    video_desc: "ชมตัวอย่างการคำนวณหน้างานจริง สะดวก รวดเร็ว แม่นยำทุกขั้นตอน ใช้งานได้ทุกที่แม้ไม่มีอินเทอร์เน็ต",
    video_fallback: "หากดูวิดีโอไม่ได้ คลิกที่นี่เพื่อเปิดบน YouTube (Watch on YouTube)",

    faq_header: "FAQ",
    faq_title: "คำถามที่พบบ่อย",
    q1: "แอปพลิเคชันต้องเชื่อมต่ออินเทอร์เน็ตหรือไม่?",
    a1: "ไม่จำเป็นครับ ฟังก์ชันการคำนวณทางเรขาคณิตและวิศวกรรมทั้ง 21 ฟังก์ชันถูกออกแบบมาให้ทำงานแบบ Offline 100% ในตัวอุปกรณ์ เพื่อรองรับการทำงานในพื้นที่ห่างไกล ชายป่า ไซส์งานอุโมงค์ หรือพื้นที่อับสัญญาณ อินเทอร์เน็ตจำเป็นเฉพาะการเปิดโหลดแผนที่ดาวเทียมออนไลน์เท่านั้น",
    q2: "มีเวอร์ชันสำหรับระบบปฏิบัติการใดบ้าง?",
    a2: "Survey Toolbox รองรับทั้งระบบ iOS (iPhone & iPad บน App Store) และ Android (สมาร์ทโฟนและแท็บเล็ตบน Google Play Store) โดยมีฟังก์ชันและการคำนวณเหมือนกันทุกประการ",
    q3: "สามารถส่งออกข้อมูล (Export) เป็นไฟล์อะไรได้บ้าง?",
    a3: "รองรับการส่งออก 3 รูปแบบหลัก: 1) เอกสาร PDF ขนาด A4 คุณภาพสูง พร้อมตารางสรุป ภาพร่าง CAD และบล็อกลงนาม 3 ฝ่าย, 2) ไฟล์ CSV สำหรับเปิดใน Microsoft Excel, และ 3) สำรองโครงการ JSON Backup",
    q4: "มีความแม่นยำและถูกต้องตามหลักวิศวกรรมแค่ไหน?",
    a4: "ทุกสมการคำนวณพัฒนาขึ้นตรงตามมาตรฐานวิศวกรรมสำรวจสากล อ้างอิงทรงรี WGS84, ทฤษฎี Redfearn Series สำหรับการแปลงพิกัด UTM, การปรับแก้สมดุลเส้นโครงสร้าง Compass Rule และเกณฑ์การทดสอบเครื่องมือวัดตามมาตรฐาน ISO 17123-5 รับประกันความถูกต้องระดับมิลลิเมตร",
    q5: "ฟังก์ชันฟรีและฟังก์ชัน Pro แตกต่างกันอย่างไร?",
    a5: "ฟังก์ชันพื้นฐาน เช่น Azimuth & Distance, Resection, Online Offset, Finder, และ Equipment List เปิดให้ใช้งานได้ฟรีตลอดชีพ ส่วนฟังก์ชันขั้นสูง เช่น โค้งราบ H-Curve, โค้งดิ่ง V-Curve, แปลงพิกัด GeoUTM, LandXML Alignment, สมุดสนาม 2 หน้ากล้อง, และการออกใบเซอร์ ISO 17123-5 สามารถปลดล็อกได้ผ่านการสมัครสมาชิก Pro",
    q6: "ข้อมูลพิกัดโครงการมีความปลอดภัยหรือไม่?",
    a6: "ปลอดภัย 100% ครับ แอปพลิเคชันไม่มีระบบเก็บข้อมูลขึ้นคลาวด์ภายนอก ข้อมูลโครงการและพิกัดรังวัดทั้งหมดจะถูกจัดเก็บอยู่ภายในหน่วยความจำของโทรศัพท์คุณเท่านั้น และไม่มีการติดตามข้อมูลส่วนบุคคลใดๆ",

    cta_title: "พร้อมยกระดับงานสำรวจของคุณแล้วหรือยัง?",
    cta_desc: "ดาวน์โหลด Survey Toolbox วันนี้ ทั้งบน iOS และ Android แล้วสัมผัสความเร็ว แม่นยำ และเป็นมืออาชีพในทุกไซต์งาน",
    cta_qr_label: "สแกนเพื่อติดตั้งบนมือถือ",

    privacy_title: "นโยบายความเป็นส่วนตัว (Privacy Policy)",
    privacy_h1: "เพื่อปรับปรุงประสิทธิภาพและพัฒนาฟังก์ชันการทำงานของแอปพลิเคชัน แอปจะมีการเก็บรวบรวมข้อมูลการใช้งานเชิงเทคนิคแบบไม่ระบุตัวตน (Anonymous Data) เช่น สถิติการเปิดใช้งานเครื่องมือต่างๆ รุ่นของอุปกรณ์ และเวอร์ชันของแอปพลิเคชัน โดยข้อมูลดังกล่าวจะถูกนำไปใช้เพื่อการวิเคราะห์และพัฒนาแอปพลิเคชันเท่านั้น",
    privacy_desc: "เพื่อปรับปรุงประสิทธิภาพและพัฒนาฟังก์ชันการทำงานของแอปพลิเคชัน แอปจะมีการเก็บรวบรวมข้อมูลการใช้งานเชิงเทคนิคแบบไม่ระบุตัวตน (Anonymous Data) เช่น สถิติการเปิดใช้งานเครื่องมือต่างๆ รุ่นของอุปกรณ์ และเวอร์ชันของแอปพลิเคชัน โดยข้อมูลดังกล่าวจะถูกนำไปใช้เพื่อการวิเคราะห์และพัฒนาแอปพลิเคชันเท่านั้น",

    terms_title: "ข้อตกลงการใช้งาน (EULA)",
    terms_intro: "เมื่อผู้ใช้ใช้งานแอปพลิเคชัน Survey Toolbox ถือว่าผู้ใช้ยอมรับข้อตกลงดังต่อไปนี้:",
    term_1: "แอปและเนื้อหาทั้งหมดเป็นทรัพย์สินทางปัญญาของผู้พัฒนา",
    term_2: "ฟังก์ชันขั้นสูงบางส่วน (Survey Toolbox Pro) ต้องสมัครสมาชิกแบบต่ออายุอัตโนมัติ",
    term_3: "การชำระเงินและการจัดการการสมัครสมาชิกทั้งหมดดำเนินการผ่านระบบของ Apple/Google อย่างปลอดภัย",
    term_4: "ผลการคำนวณทางวิศวกรรมควรได้รับการตรวจสอบและรับรองโดยวิศวกรผู้เชี่ยวชาญก่อนนำไปใช้ในการก่อสร้างจริง",

    footer_tag: "Professional Engineering Tools for iOS & Android",
    footer_standards: "",
    btn_feedback: "แจ้งปัญหา / แนะนำติชม",
    copyright: "© 2026 Survey Toolbox. All rights reserved. Developed with Engineering Precision."
  },
  en: {
    brand_title: "Survey Toolbox",
    brand_tagline: "",
    nav_home: "Home",
    nav_manual: "User Manual",
    nav_video: "Video Demo",
    nav_features: "Features",
    nav_audience: "Who It's For",
    nav_faq: "FAQ",
    nav_privacy: "Privacy Policy",
    nav_terms: "Terms of Use",
    btn_ios: "iOS (App Store)",
    btn_android: "Android (Play Store)",

    hero_badge: "#1 Tool for Surveyors",
    hero_title_1: "Elevate Your Surveying Standards",
    hero_title_2: "Precision. Speed. For Every Survey Task.",
    hero_desc: "Transform your smartphone or tablet into a field surveying calculator. From pile deviation checks, route curves, and GeoUTM conversions to short leveling and ISO 17123-5 total station collimation—engineered for 100% offline field reliability.",
    hero_btn_explore: "Explore User Manual",
    hero_btn_download: "Download Free App",

    stat_tools_num: "21",
    stat_tools_label: "Calculation Tools",
    stat_offline_num: "100%",
    stat_offline_label: "Field-Ready Offline",
    stat_precision_num: "Coords & Dist",
    stat_precision_label: "High-Precision Coordinate & Distance Calculation",
    stat_iso_num: "PDF Reports",
    stat_iso_label: "Summary Report of Calculation & Verification",

    manual_badge: "GUIDES & DOCUMENTATION",
    manual_title: "21 Survey Tools Technical Manual",
    manual_subtitle: "Comprehensive technical documentation, function descriptions, input/output parameters, and step-by-step field procedures.",
    search_placeholder: "Search survey tools (e.g. Resection, Curve, Azimuth, Coordinates, Collimation, #1 - #21)...",
    search_count: "Showing {count} matching survey tools",
    search_hint: "Click card to view user manual",
    search_clear: "Clear Search",
    search_empty_title: "No survey tools found",
    search_empty_desc: "Try different keywords or switch back to the \"All Tools\" tab to view the complete catalog.",

    card_view_manual: "View User Guide",
    card_badge_free: "FREE",
    card_badge_pro: "PRO",

    modal_tab_overview: "1. Function Description",
    modal_tab_params: "2. Parameters (Input/Output)",
    modal_tab_formula: "",
    modal_tab_steps: "3. Field Procedure (Step-by-Step)",
    modal_tab_simulator: "",
    modal_tab_tips: "",
    modal_highlights_heading: "Key Module Highlights",

    modal_btn_copy_formula: "Copy Formula",
    modal_btn_copied: "Formula Copied!",
    modal_btn_print: "Print / Export PDF",
    modal_btn_close: "Close Window",
    modal_sim_run: "Calculate Live Output",
    modal_sim_reset: "Reset Defaults",
    modal_sim_result_heading: "Real-time Calculated Outputs:",

    feat_header: "FEATURE HIGHLIGHTS",
    feat_title: "Engineered for Field Professionals",
    f1_title: "Azimuth & Distance",
    f1_desc: "Inverse geodetic geometry resolving grid bearings in DMS and horizontal distances with millimetric accuracy.",
    f2_title: "Deviation Check",
    f2_desc: "Decompose Cartesian deltas into structural grid Chainage & Offset, highlighting out-of-tolerance piles in red.",
    f3_title: "Smart Field Geometry",
    f3_desc: "Solve horizontal curves, vertical crest/sag profiles, 2-point resection trilateration, and batter board offsets instantly.",
    f4_title: "Export & Compliance",
    f4_desc: "Generate professional A4 PDF reports with CAD sketches, 3 signatory blocks, and ISO 17123-5 collimation certificates.",

    aud_title: "Who is Survey Toolbox For?",
    aud_subtitle: "Built to empower every tier of civil and surveying engineering",
    p1_title: "Field Surveyors",
    p1_desc: "Leave cumbersome paper field books behind. Eliminate calculator input mistakes under harsh sunlight. Verify tolerances and sign off with supervisors right at the instrument tripod.",
    p2_title: "Engineers & Inspectors",
    p2_desc: "Verify foundation pile deviations, road subgrade levels, and LandXML alignment stakeouts independently without waiting for office CAD processing.",
    p3_title: "Students",
    p3_desc: "A hands-on digital laboratory to study geomatics formulas, map projections, Gauss-Kruger/UTM conversions, and ISO instrument calibration standards.",

    video_title: "Survey Toolbox Field Demonstration Video",
    video_desc: "Watch real-world field workflows in action. Fast, intuitive, and rigorously accurate across every survey discipline.",
    video_fallback: "Can't view the video? Click here to watch on YouTube",

    faq_header: "FAQ",
    faq_title: "Frequently Asked Questions",
    q1: "Does the app require internet connectivity?",
    a1: "No. All 21 geometric and geodetic calculation engines run 100% Offline directly on your smartphone hardware. Internet is only required if you choose to load live online satellite map tiles.",
    q2: "Which mobile operating systems are supported?",
    a2: "Survey Toolbox is natively available for both iOS (iPhone & iPad on the App Store) and Android (smartphones & tablets on Google Play Store) with complete feature parity.",
    q3: "What file formats can be exported?",
    a3: "Three main formats: 1) High-resolution A4 landscape PDF reports with CAD plots and 3 signatory blocks, 2) CSV spreadsheets for Microsoft Excel, and 3) JSON project backup files.",
    q4: "How accurate are the mathematical calculations?",
    a4: "All algorithms adhere strictly to international surveying standards: WGS84 reference ellipsoid, Redfearn series UTM transformations, Compass Rule adjustments, and ISO 17123-5 calibration tolerances.",
    q5: "What is the difference between Free and Pro tiers?",
    a5: "Essential utilities such as Azimuth & Distance, Resection, Online Offset, Marker Finder, and Equipment Tracker are permanently Free. Advanced modules including H-Curve, V-Curve, GeoUTM, LandXML Alignment, and ISO 17123-5 are unlocked via Pro.",
    q6: "Is my project coordinate data private and secure?",
    a6: "100% private. The application does not upload your project points to external cloud servers. All project files remain strictly on your local device storage.",

    cta_title: "Ready to Elevate Your Surveying Workflow?",
    cta_desc: "Download Survey Toolbox today on iOS and Android. Experience unmatched field precision on every construction site.",
    cta_qr_label: "Scan to install on mobile",

    privacy_title: "Privacy Policy",
    privacy_h1: "To improve performance and enhance application features, the app collects anonymous technical usage data (such as tool usage statistics, device model, and app version). This data is used exclusively for analysis and application development.",
    privacy_desc: "To improve performance and enhance application features, the app collects anonymous technical usage data (such as tool usage statistics, device model, and app version). This data is used exclusively for analysis and application development.",

    terms_title: "Terms of Use (EULA)",
    terms_intro: "By using Survey Toolbox, you agree to the following conditions:",
    term_1: "All app designs, algorithms, and documentation are proprietary intellectual property.",
    term_2: "Pro features require an active auto-renewing subscription managed via Apple/Google.",
    term_3: "All subscription transactions are securely processed through official store platforms.",
    term_4: "Engineering results must be reviewed and certified by licensed professionals prior to physical execution.",

    footer_tag: "Professional Engineering Tools for iOS & Android",
    footer_standards: "",
    btn_feedback: "Feedback & Bug Report",
    copyright: "© 2026 Survey Toolbox. All rights reserved. Developed with Engineering Precision."
  }
};

/**
 * 21 Survey Tools Catalog
 * Full metadata, inputs/outputs, LaTeX formulas, procedural steps, numerical examples, and real JavaScript calculation engines.
 */
const surveyToolsData = [
  {
    id: "deviate-ne",
    num: 1,
    nameTh: "ค่าเยื้องศูนย์ (N/E)",
    nameEn: "Deviate (N/E)",
    subtitleTh: "หาผลต่างพิกัด",
    subtitleEn: "Coordinate Difference Check",
    category: "coord",
    isPro: false,
    icon: "fa-solid fa-diagram-project",
    summaryTh: "ตรวจสอบความคลาดเคลื่อนของเสาเข็มและโครงสร้างเทียบกับแนวแกนอาคาร (Chainage & Offset) ไฮไลต์สีแดงอัตโนมัติเมื่อเกิน 50 มม.",
    summaryEn: "Decomposes Cartesian coordinate deviations into longitudinal chainage and transverse offset along structural gridlines. Alerts when > 50 mm.",
    keywords: ["deviate", "ne", "เสาเข็ม", "เยื้องศูนย์", "พิกัด", "offset", "pile", "as-built", "gridline", "chainage"],
    overviewTh: "ในงานก่อสร้างอาคารสูง สะพาน และฐานรากเสาเข็มเจาะ การหาผลต่างพิกัดราบ (ΔN, ΔE) เพียงอย่างเดียวไม่เพียงพอต่อการตรวจสอบทางวิศวกรรมโครงสร้าง เพราะวิศวกรต้องการทราบว่าเสาเข็มเบี่ยงเบนไปตามแนวแกนอาคาร (Chainage: CH) เท่าใด และเบี่ยงเบนออกด้านข้างตั้งฉากกับแนวแกน (Offset: O/S) เท่าใด เครื่องมือนี้ทำการหมุนเวกเตอร์ความคลาดเคลื่อนเข้าสู่แนวแกนอาคารโดยอัตโนมัติ และแจ้งเตือนทันทีหากเกินเกณฑ์มาตรฐาน 50 มม.",
    overviewEn: "In building construction and bored pile inspections, raw coordinate deltas (ΔN, ΔE) are insufficient. Structural engineers require deviations decomposed relative to building gridlines: longitudinal chainage (CH) and transverse offset (O/S). This module rotates the 2D error vector onto the structural azimuth and automatically flags non-conformance exceeding 50 mm.",
    standardTh: "มาตรฐาน วสท. และกรมโยธาธิการและผังเมือง (ความคลาดเคลื่อนยอมรับได้ของเสาเข็มคอนกรีตไม่เกิน 50 มม.)",
    standardEn: "EIT Structural Guidelines & Thai Civil Building Code (Bored pile deviation tolerance <= 50 mm).",
    inputs: [
      { id: "structAz", labelTh: "ทิศทางโครงสร้าง (องศา)", labelEn: "Structure Azimuth (Deg)", unit: "deg", type: "number", default: 45.0, min: 0, max: 360, step: 0.1 },
      { id: "desN", labelTh: "พิกัดแบบ N (Design N)", labelEn: "Design Northing (N)", unit: "m", type: "number", default: 1000.000, step: 0.001 },
      { id: "desE", labelTh: "พิกัดแบบ E (Design E)", labelEn: "Design Easting (E)", unit: "m", type: "number", default: 500.000, step: 0.001 },
      { id: "actN", labelTh: "พิกัดรังวัดจริง N (Actual N)", labelEn: "As-Built Northing (N)", unit: "m", type: "number", default: 1000.040, step: 0.001 },
      { id: "actE", labelTh: "พิกัดรังวัดจริง E (Actual E)", labelEn: "As-Built Easting (E)", unit: "m", type: "number", default: 500.030, step: 0.001 }
    ],
    outputs: [
      { id: "dN", labelTh: "ผลต่างพิกัด N (ΔN)", labelEn: "Delta Northing (ΔN)", unit: "m" },
      { id: "dE", labelTh: "ผลต่างพิกัด E (ΔE)", labelEn: "Delta Easting (ΔE)", unit: "m" },
      { id: "dev", labelTh: "ระยะเยื้องศูนย์รวม (Dev)", labelEn: "Resultant Deviation (Dev)", unit: "m" },
      { id: "ch", labelTh: "ระยะตามแนวแกน (CH)", labelEn: "Longitudinal Shift (CH)", unit: "m" },
      { id: "os", labelTh: "ระยะเยื้องฉากแนวแกน (O/S)", labelEn: "Transverse Offset (O/S)", unit: "m" },
      { id: "status", labelTh: "สถานะการประเมิน", labelEn: "Tolerance Evaluation", unit: "" }
    ],
    formulas: {
      latex: "\\Delta N = N_{\\text{act}} - N_{\\text{des}}, \\quad \\Delta E = E_{\\text{act}} - E_{\\text{des}} \\\\[6pt] \\text{Dev} = \\sqrt{\\Delta N^2 + \\Delta E^2}, \\quad \\text{Azi}_{\\text{dev}} = \\operatorname{atan2}(\\Delta E, \\Delta N) \\\\[6pt] \\delta = (\\text{Azi}_{\\text{dev}} - \\text{Azi}_{\\text{struct}}) \\\\[6pt] \\text{CH} = \\text{Dev} \\cdot \\cos(\\delta), \\quad \\text{O/S} = \\text{Dev} \\cdot \\sin(\\delta)",
      plain: "ΔN = N_act - N_des\nΔE = E_act - E_des\nDev = sqrt(ΔN² + ΔE²)\nAzi_dev = atan2(ΔE, ΔN)\nδ = Azi_dev - Azi_struct\nCH = Dev * cos(δ)  (+ไปข้างหน้า, -ถอยหลัง)\nO/S = Dev * sin(δ) (+ไปขวา, -ไปซ้าย)"
    },
    stepsTh: [
      "1. เข้าเมนู ค่าเยื้องศูนย์ (N/E) และกดไอคอน Setup เพื่อตั้งค่าชื่อโครงการและทีมงาน",
      "2. ป้อนค่าทิศทางโครงสร้าง (Structure Azimuth) ตามแนวกริดเสา เช่น 45° 00' 00\"",
      "3. ป้อนพิกัดตามแบบก่อสร้าง (Design Coordinates N, E)",
      "4. ป้อนพิกัดที่รังวัดได้จริงในสนาม (Actual As-Built N, E)",
      "5. กดปุ่ม 'คำนวณ' ระบบจะแยกความคลาดเคลื่อนเป็น CH, O/S และระยะเบี่ยงเบนรวม Dev",
      "6. กดปุ่ม 'บันทึก' และส่งออกรายงาน PDF พร้อมตารางตรวจสอบเสาเข็มและช่องลงนาม 3 ฝ่าย"
    ],
    stepsEn: [
      "1. Open Deviate (N/E) and configure project metadata via Setup.",
      "2. Enter the structural gridline azimuth in degrees, minutes, and seconds.",
      "3. Input approved blueprint Design Coordinates (N, E).",
      "4. Input field-observed As-Built Coordinates (N, E) from Total Station or GNSS RTK.",
      "5. Tap 'Calculate' to decompose errors into CH, O/S, and total 2D deviation.",
      "6. Tap 'Save' and export standard A4 PDF verification sheet with 3 signatory blocks."
    ],
    example: {
      descTh: "ตรวจสอบเสาเข็มเจาะ P-24: แนวกริด 45°, แบบ N=1000.000, E=500.000, หน้างานจริง N=1000.040, E=500.030",
      descEn: "Inspection of bored pile P-24: Grid azimuth 45°, Design N=1000.000, E=500.000, As-Built N=1000.040, E=500.030"
    },
    tipsTh: "ตรวจสอบให้แน่ใจว่า Azimuth โครงสร้างชี้ไปในทิศทางของสเตชั่นบวกเสมอ (เช่น จากกริด 1 ไปกริด 2) หากใส่ทิศทางกลับกัน 180° จะทำให้เครื่องหมายของ CH และ O/S สลับด้าน",
    tipsEn: "Ensure structural azimuth points forward along increasing chainage (Grid 1 -> Grid 2); a 180° inversion flips CH and O/S signs.",
    highlightsTh: [
      "แยกเวกเตอร์ความคลาดเคลื่อน (ΔN, ΔE) เข้าสู่แนวแกนอาคารเป็นระยะตามแกน (CH) และระยะเยื้องฉาก (O/S) อัตโนมัติ",
      "ระบบแจ้งเตือนแถบสีแดงทันทีเมื่อตำแหน่งเสาเข็มหรือตอม่อเยื้องศูนย์เกินเกณฑ์มาตรฐาน 50 มม.",
      "จำลองกราฟิกตำแหน่งเสาเข็มเทียบแนวกริดโครงสร้างแบบ Real-time เพิ่มความมั่นใจก่อนเทคอนกรีต",
      "ส่งออกรายงานตรวจสอบเสาเข็มเจาะและฐานราก A4 PDF พร้อมช่องลงนาม 3 ฝ่าย เซ็นรับรองได้ทันทีหน้างาน"
    ],
    highlightsEn: [
      "Decomposes Cartesian (ΔN, ΔE) deltas into longitudinal Chainage (CH) and transverse Offset (O/S) automatically",
      "Instant high-visibility RED warning alert whenever pile or pier deviation exceeds the 50 mm tolerance",
      "Real-time 2D graphic canvas visualizing pile center offset relative to the structural building gridline",
      "Exports official A4 PDF pile audit sheets with 3-party signatory blocks ready for immediate on-site sign-off"
    ],
    calculate: (inputs) => {
      const azRad = (inputs.structAz || 0) * Math.PI / 180;
      const dN = (inputs.actN || 0) - (inputs.desN || 0);
      const dE = (inputs.actE || 0) - (inputs.desE || 0);
      const dev = Math.hypot(dN, dE);
      let aziDev = Math.atan2(dE, dN);
      if (aziDev < 0) aziDev += 2 * Math.PI;
      const delta = aziDev - azRad;
      const ch = dev * Math.cos(delta);
      const os = dev * Math.sin(delta);
      const isPass = dev <= 0.050;
      return {
        dN: (dN >= 0 ? "+" : "") + dN.toFixed(3) + " m",
        dE: (dE >= 0 ? "+" : "") + dE.toFixed(3) + " m",
        dev: dev.toFixed(3) + " m (" + (dev * 1000).toFixed(1) + " mm)",
        ch: (ch >= 0 ? "+" : "") + ch.toFixed(3) + " m",
        os: (os >= 0 ? "+" : "") + os.toFixed(3) + " m",
        status: isPass ? "PASS (อยู่ในเกณฑ์ <= 50 mm)" : "FAIL (เกินเกณฑ์ > 50 mm - ต้องส่งวิศวกรโครงสร้างตรวจ)"
      };
    }
  },

  {
    id: "deviate-angle",
    num: 2,
    nameTh: "ค่าเยื้องศูนย์ (มุม)",
    nameEn: "Deviate (Angle)",
    subtitleTh: "รังวัดจากมุมและระยะ",
    subtitleEn: "Polar Observation Check",
    category: "coord",
    isPro: true,
    icon: "fa-solid fa-arrows-split-up-and-left",
    summaryTh: "แปลงผลการส่องมุมราบและระยะทางจากกล้อง Total Station เข้าหาแนวแกนโครงสร้าง พร้อมวิเคราะห์ผลต่างพิกัดทันที",
    summaryEn: "Directly transforms polar total station angles and horizontal distances into structural deviations without on-board CAD.",
    keywords: ["deviate", "angle", "polar", "มุมราบ", "ระยะทาง", "total station", "backsight", "station"],
    overviewTh: "ออกแบบมาสำหรับช่างสำรวจที่ใช้กล้อง Total Station ยิงตรวจสอบตำแหน่งเสาเข็มหรือเสาตอม่อโดยตรงด้วยค่ามุมราบ (Horizontal Angle) และระยะทางราบ (Distance) โดยไม่ต้องเปิดฟังก์ชัน Stakeout ในตัวกล้อง ช่วยให้คำนวณพิกัดจริงและหมุนค่าเยื้องศูนย์ตามแนวแกนโครงสร้างได้ทันทีหน้างาน",
    overviewEn: "Designed for surveyors measuring as-built columns or piles directly using raw polar angles and distances from a Total Station setup. It derives coordinates on-the-fly and decomposes deviations relative to structural axes.",
    standardTh: "มาตรฐานงานสำรวจภาคสนามและการรังวัดแบบโพลาร์ (Polar Surveying Standards)",
    standardEn: "ISO / FIG Guidelines for Polar Total Station Measurements",
    inputs: [
      { id: "staN", labelTh: "พิกัดจุดตั้งกล้อง N (Station N)", labelEn: "Station Northing (N)", unit: "m", type: "number", default: 1000.000, step: 0.001 },
      { id: "staE", labelTh: "พิกัดจุดตั้งกล้อง E (Station E)", labelEn: "Station Easting (E)", unit: "m", type: "number", default: 500.000, step: 0.001 },
      { id: "bsN", labelTh: "พิกัดจุดเล็งหลัง N (Backsight N)", labelEn: "Backsight Northing (N)", unit: "m", type: "number", default: 1100.000, step: 0.001 },
      { id: "bsE", labelTh: "พิกัดจุดเล็งหลัง E (Backsight E)", labelEn: "Backsight Easting (E)", unit: "m", type: "number", default: 500.000, step: 0.001 },
      { id: "obsAngle", labelTh: "มุมราบเปิดจาก BS (องศา)", labelEn: "Observed Horiz Angle (Deg)", unit: "deg", type: "number", default: 45.000, step: 0.001 },
      { id: "obsDist", labelTh: "ระยะราบที่วัดได้ (m)", labelEn: "Observed Horiz Distance", unit: "m", type: "number", default: 50.000, step: 0.001 },
      { id: "structAz", labelTh: "ทิศทางโครงสร้าง (องศา)", labelEn: "Structure Azimuth (Deg)", unit: "deg", type: "number", default: 45.0, step: 0.1 },
      { id: "desN", labelTh: "พิกัดแบบ N (Design N)", labelEn: "Design Northing (N)", unit: "m", type: "number", default: 1035.335, step: 0.001 },
      { id: "desE", labelTh: "พิกัดแบบ E (Design E)", labelEn: "Design Easting (E)", unit: "m", type: "number", default: 535.340, step: 0.001 }
    ],
    outputs: [
      { id: "actN", labelTh: "พิกัดรังวัดจริง N", labelEn: "Computed Actual N", unit: "m" },
      { id: "actE", labelTh: "พิกัดรังวัดจริง E", labelEn: "Computed Actual E", unit: "m" },
      { id: "dev", labelTh: "ระยะเยื้องศูนย์รวม (Dev)", labelEn: "Resultant Deviation", unit: "m" },
      { id: "ch", labelTh: "ระยะตามแนวแกน (CH)", labelEn: "Chainage Shift (CH)", unit: "m" },
      { id: "os", labelTh: "ระยะเยื้องฉาก (O/S)", labelEn: "Offset Shift (O/S)", unit: "m" },
      { id: "status", labelTh: "สถานะการประเมิน", labelEn: "Tolerance Status", unit: "" }
    ],
    formulas: {
      latex: "\\text{Azi}_{\\text{BS}} = \\operatorname{atan2}(E_{\\text{BS}} - E_{\\text{sta}}, N_{\\text{BS}} - N_{\\text{sta}}) \\\\[6pt] \\text{Azi}_{\\text{target}} = (\\text{Azi}_{\\text{BS}} + \\text{Angle}_{\\text{obs}}) \\bmod 360^{\\circ} \\\\[6pt] N_{\\text{act}} = N_{\\text{sta}} + D \\cdot \\cos(\\text{Azi}_{\\text{target}}), \\quad E_{\\text{act}} = E_{\\text{sta}} + D \\cdot \\sin(\\text{Azi}_{\\text{target}})",
      plain: "Azi_BS = atan2(E_BS - E_sta, N_BS - N_sta)\nAzi_target = (Azi_BS + Angle_obs) mod 360°\nN_act = N_sta + Dist * cos(Azi_target)\nE_act = E_sta + Dist * sin(Azi_target)\nต่อด้วยการคำนวณ Dev, CH, O/S เทียบกับพิกัดแบบ"
    },
    stepsTh: [
      "1. ตั้งกล้องบนจุด Station และส่องเปิดหน้ากล้องไปที่ Backsight (เซ็ต 0° 00' 00\")",
      "2. ส่องไปยังเป้าปริซึมที่ตำแหน่งเสาโครงสร้าง อ่านค่ามุมราบและระยะทางราบ",
      "3. กรอกพิกัดจุดตั้งกล้อง, จุดเล็งหลัง, มุมราบ และระยะราบ ลงในโปรแกรม",
      "4. กรอกทิศทางแนวแกนอาคารและพิกัดตามแบบก่อสร้าง",
      "5. กด 'คำนวณ' เพื่อรับผลต่างพิกัดและค่าเยื้องศูนย์ทันที"
    ],
    stepsEn: [
      "1. Set up Total Station on known Station and zero-set onto Backsight.",
      "2. Sight prism on structural element, reading turned horizontal angle and horizontal distance.",
      "3. Enter Station, Backsight coordinates, observed angle, and distance into the app.",
      "4. Enter structural azimuth and design coordinates.",
      "5. Tap 'Calculate' to derive actual coordinates and structural offsets."
    ],
    example: {
      descTh: "สถานี (1000, 500), BS (1100, 500), มุม 45°, ระยะ 50 ม., แบบ (1035.335, 535.340), แกน 45°",
      descEn: "Station (1000, 500), BS (1100, 500), Angle 45°, Dist 50m, Design (1035.335, 535.340), Axis 45°"
    },
    tipsTh: "เลือกระยะ Backsight ให้ยาวกว่าระยะไปยังเป้าหมายเสมอ เพื่อลดผลกระทบจากความคลาดเคลื่อนในการเล็งเป้า (Collimation error)",
    tipsEn: "Maintain backsight distance longer than target distance to minimize angular sighting errors.",
    highlightsTh: [
      "ตรวจสอบเสาเข็มได้โดยตรงจากค่ามุมราบและระยะทางจากกล้อง Total Station โดยไม่ต้องกดตั้ง Station ในตัวกล้อง",
      "คำนวณพิกัดจริงและหมุนค่าเยื้องศูนย์เข้าแนวแกนโครงสร้าง (CH, O/S, Dev) ให้อัตโนมัติในคลิกเดียว",
      "ลดขั้นตอนการจดสมุดและกดเครื่องคิดเลขกลางแดด ป้องกันความผิดพลาดจากการคำนวณมือ 100%",
      "บันทึกประวัติการรังวัดหลายจุดต่อเนื่อง พร้อมออกรายงาน PDF สรุปผลการตรวจสอบส่งวิศวกรโครงสร้าง"
    ],
    highlightsEn: [
      "Inspects pile deviations directly from raw horizontal angles and distances without onboard Total Station setup",
      "Instantly solves as-built coordinates and decomposes structural grid deviations (CH, O/S, Dev) in a single tap",
      "Eliminates manual field note transcription and calculator errors under harsh sunlight with 100% precision",
      "Logs multi-point inspection sequences and exports standard PDF audit summaries for structural engineering review"
    ],
    calculate: (inputs) => {
      const bsDN = (inputs.bsN || 0) - (inputs.staN || 0);
      const bsDE = (inputs.bsE || 0) - (inputs.staE || 0);
      let aziBS = Math.atan2(bsDE, bsDN);
      if (aziBS < 0) aziBS += 2 * Math.PI;
      const obsRad = (inputs.obsAngle || 0) * Math.PI / 180;
      const targetAzi = (aziBS + obsRad) % (2 * Math.PI);
      const actN = (inputs.staN || 0) + (inputs.obsDist || 0) * Math.cos(targetAzi);
      const actE = (inputs.staE || 0) + (inputs.obsDist || 0) * Math.sin(targetAzi);
      const dN = actN - (inputs.desN || 0);
      const dE = actE - (inputs.desE || 0);
      const dev = Math.hypot(dN, dE);
      const azStruct = (inputs.structAz || 0) * Math.PI / 180;
      let aziDev = Math.atan2(dE, dN);
      if (aziDev < 0) aziDev += 2 * Math.PI;
      const delta = aziDev - azStruct;
      const ch = dev * Math.cos(delta);
      const os = dev * Math.sin(delta);
      return {
        actN: actN.toFixed(3) + " m",
        actE: actE.toFixed(3) + " m",
        dev: dev.toFixed(3) + " m (" + (dev * 1000).toFixed(1) + " mm)",
        ch: (ch >= 0 ? "+" : "") + ch.toFixed(3) + " m",
        os: (os >= 0 ? "+" : "") + os.toFixed(3) + " m",
        status: dev <= 0.050 ? "PASS (อยู่ในเกณฑ์ <= 50 mm)" : "FAIL (เกินเกณฑ์ > 50 mm)"
      };
    }
  },

  {
    id: "azimuth-distance",
    num: 3,
    nameTh: "ภาคของทิศ & ระยะ",
    nameEn: "Azimuth & Distance",
    subtitleTh: "หาทิศและระยะทาง",
    subtitleEn: "Inverse Geodetic Geometry",
    category: "coord",
    isPro: false,
    icon: "fa-solid fa-compass",
    summaryTh: "คำนวณย้อนกลับ (Inverse) หาค่ามุมภาคทิศในรูปแบบ DMS และระยะทางราบระหว่างหมุดสำรวจสองจุดด้วยความแม่นยำสูง",
    summaryEn: "Solves the fundamental inverse geodetic problem yielding grid azimuth in DMS and horizontal distance.",
    keywords: ["azimuth", "distance", "inverse", "bearing", "dms", "ทิศทาง", "ระยะทาง", "พิกัด"],
    overviewTh: "การคำนวณย้อนกลับ (Inverse Computation) เป็นหัวใจพื้นฐานที่สุดของงานวิศวกรรมสำรวจ เมื่อทราบพิกัดของจุดสองจุด โปรแกรมจะคำนวณหาทิศทางภาคของทิศ (Azimuth 0°-360° เวียนขวาจากทิศเหนือ) และระยะทางราบระหว่างหมุดทั้งสองอย่างแม่นยำระดับมิลลิเมตร ใช้สำหรับตั้งกล้องเล็งหลัง ตรวจสอบแนวเขตที่ดิน และตรวจสอบผลการวางผัง",
    overviewEn: "Inverse calculation is the bedrock of plane surveying. Given coordinates of two points, it determines clockwise grid azimuth (0°-360°) and true horizontal distance to millimetric precision. Essential for backsight orientation, boundary checks, and traverse verification.",
    standardTh: "มาตรฐานการคำนวณงานรังวัดที่ดินและวิศวกรรมสำรวจ (Plane Surveying Inverse Problem)",
    standardEn: "Plane Surveying Standard Inverse Formulae",
    inputs: [
      { id: "stN", labelTh: "จุดเริ่มต้น N (Start N)", labelEn: "Start Northing (N)", unit: "m", type: "number", default: 1000.000, step: 0.001 },
      { id: "stE", labelTh: "จุดเริ่มต้น E (Start E)", labelEn: "Start Easting (E)", unit: "m", type: "number", default: 500.000, step: 0.001 },
      { id: "edN", labelTh: "จุดสิ้นสุด N (End N)", labelEn: "End Northing (N)", unit: "m", type: "number", default: 1030.000, step: 0.001 },
      { id: "edE", labelTh: "จุดสิ้นสุด E (End E)", labelEn: "End Easting (E)", unit: "m", type: "number", default: 540.000, step: 0.001 }
    ],
    outputs: [
      { id: "dN", labelTh: "ผลต่างพิกัด N (ΔN)", labelEn: "Delta Northing (ΔN)", unit: "m" },
      { id: "dE", labelTh: "ผลต่างพิกัด E (ΔE)", labelEn: "Delta Easting (ΔE)", unit: "m" },
      { id: "dist", labelTh: "ระยะทางราบ (Distance)", labelEn: "Horizontal Distance", unit: "m" },
      { id: "azDMS", labelTh: "ภาคของทิศ (Azimuth)", labelEn: "Grid Azimuth (DMS)", unit: "DMS" },
      { id: "azDec", labelTh: "ภาคของทิศ (ทศนิยม)", labelEn: "Azimuth (Decimal Deg)", unit: "deg" }
    ],
    formulas: {
      latex: "\\Delta N = N_2 - N_1, \\quad \\Delta E = E_2 - E_1 \\\\[6pt] \\text{Distance} = \\sqrt{\\Delta N^2 + \\Delta E^2} \\\\[6pt] \\theta = \\operatorname{atan2}(\\Delta E, \\Delta N) \\times \\frac{180}{\\pi} \\\\[6pt] \\text{Azimuth} = (\\theta + 360^{\\circ}) \\bmod 360^{\\circ}",
      plain: "ΔN = N_end - N_start\nΔE = E_end - E_start\nDistance = sqrt(ΔN² + ΔE²)\nAzimuth = (atan2(ΔE, ΔN) * 180 / π + 360) mod 360°\nแปลงเป็น องศา-ลิปดา-ฟิลิปดา (DMS)"
    },
    stepsTh: [
      "1. เข้าเมนู ภาคของทิศ & ระยะ",
      "2. กรอกพิกัดจุดเริ่มต้น (Start Point N, E)",
      "3. กรอกพิกัดจุดปลายทาง (End Point N, E)",
      "4. กด 'คำนวณ' เพื่อรับระยะทางราบและค่ามุม Azimuth ทันที",
      "5. กดคัดลอกค่ามุมหรือแชร์ผลลัพธ์ผ่าน LINE / Email"
    ],
    stepsEn: [
      "1. Navigate to Azimuth & Distance.",
      "2. Input Start Point coordinates (N, E).",
      "3. Input End Point coordinates (N, E).",
      "4. Tap 'Calculate' to instantly see horizontal distance and DMS bearing.",
      "5. Copy result or share via messaging/email."
    ],
    example: {
      descTh: "หมุด BM-01 (1000.000, 500.000) ส่องไปยัง P-101 (1030.000, 540.000): ระยะ 50.000 ม., Azimuth 53° 07' 48.37\"",
      descEn: "BM-01 (1000.000, 500.000) to P-101 (1030.000, 540.000): Distance 50.000 m, Azimuth 53° 07' 48.37\""
    },
    tipsTh: "หากคำนวณจุดเดียวกัน (ΔN=0, ΔE=0) ระบบจะแสดงระยะ 0.000 ม. และ Azimuth 0° 00' 00\" เพื่อป้องกันการหารด้วยศูนย์ (Division by zero)",
    tipsEn: "Identical points return zero distance and safe 0° azimuth preventing mathematical exceptions.",
    highlightsTh: [
      "คำนวณย้อนกลับ (Inverse Geometry) หาค่า Azimuth (DMS/ทศนิยม) และระยะราบความแม่นยำสูงระดับมิลลิเมตร",
      "แสดงแผนภาพเวกเตอร์ทิศทางและจตุภาค (Quadrant) ชัดเจน เข้าใจง่าย ตรวจสอบมุมเล็งหลังได้ทันที",
      "ระบบจัดการจุดพิกัด รองรับการบันทึกประวัติ คัดลอกค่า และส่งออกข้อมูลเป็น PDF, Excel (CSV) หรือ JSON",
      "มีระบบ Interactive Tutorial แนะนำขั้นตอนการรังวัดทีละสเต็ป ใช้งานง่ายแม้เป็นช่างสำรวจมือใหม่"
    ],
    highlightsEn: [
      "Inverse geodetic geometry resolving grid azimuth in DMS/decimal and horizontal distance to millimeter precision",
      "Interactive direction vector and quadrant graphic display for instant visual orientation and backsight checks",
      "Coordinate point manager supporting calculation history, clipboard copying, and export to PDF, CSV, or JSON",
      "Built-in interactive tutorial providing step-by-step guidance for seamless onboarding of junior surveyors"
    ],
    calculate: (inputs) => {
      const dN = (inputs.edN || 0) - (inputs.stN || 0);
      const dE = (inputs.edE || 0) - (inputs.stE || 0);
      const dist = Math.hypot(dN, dE);
      let az = Math.atan2(dE, dN) * 180 / Math.PI;
      if (az < 0) az += 360;
      if (dist === 0) az = 0;
      const deg = Math.floor(az);
      const minFull = (az - deg) * 60;
      const min = Math.floor(minFull);
      const sec = ((minFull - min) * 60).toFixed(2);
      return {
        dN: (dN >= 0 ? "+" : "") + dN.toFixed(3) + " m",
        dE: (dE >= 0 ? "+" : "") + dE.toFixed(3) + " m",
        dist: dist.toFixed(3) + " m",
        azDMS: `${deg}° ${min.toString().padStart(2, '0')}' ${sec.padStart(5, '0')}"`,
        azDec: az.toFixed(6) + "°"
      };
    }
  },

  {
    id: "h-curve",
    num: 4,
    nameTh: "ตำแหน่งโค้งราบ (H-Curve)",
    nameEn: "S-O Curve H",
    subtitleTh: "งานวางโค้งราบ",
    subtitleEn: "Horizontal Circular Curve Setting Out",
    category: "curve",
    isPro: true,
    icon: "fa-solid fa-route",
    summaryTh: "จัดทำตารางวางแนวโค้งวงกลม คำนวณมุมเบี่ยงเบน คอร์ด และพิกัดสเตชั่น พร้อมปรับแก้สมดุลพิกัดบรรจบจุด PT",
    summaryEn: "Generates horizontal circular curve setting out schedules with deflection angles, chords, and Compass Rule PT closure adjustment.",
    keywords: ["curve", "h-curve", "โค้งราบ", "pc", "pi", "pt", "radius", "deflection", "chord", "ถนน", "สายทาง"],
    overviewTh: "งานก่อสร้างถนน ทางรถไฟ และระบบสาธารณูปโภคจำเป็นต้องวางแนวโค้งราบวงกลมเชื่อมต่อระหว่างเส้นตรงสองแนว โปรแกรมนี้คำนวณองค์ประกอบโค้งทั้งหมด (L, R, Delta, Mo) และคำนวณมุมเบี่ยงเบน (Deflection Angle) คอร์ดย่อย (Sub-chord) พร้อมพิกัด N, E ทุกช่วงสเตชั่น โดยมีระบบปรับแก้สมดุล Compass Rule เข้าหาจุด PT ที่ทราบค่าจริง",
    overviewEn: "Highway and rail alignments require circular horizontal curves. This module computes all curve elements (L, R, Delta, Mo), generating stakeout schedules with deflection angles, sub-chords, and coordinates adjusted onto PT via the Compass Rule.",
    standardTh: "มาตรฐานงานทาง กรมทางหลวง และกรมทางหลวงชนบท (Horizontal Curve Design Standards)",
    standardEn: "AASHTO / Highway Engineering Horizontal Circular Curve Standards",
    inputs: [
      { id: "pcSta", labelTh: "สเตชั่น PC (m)", labelEn: "PC Station (m)", unit: "m", type: "number", default: 100.0, step: 1.0 },
      { id: "pcN", labelTh: "พิกัด PC (N)", labelEn: "PC Northing (N)", unit: "m", type: "number", default: 1000.000, step: 0.001 },
      { id: "pcE", labelTh: "พิกัด PC (E)", labelEn: "PC Easting (E)", unit: "m", type: "number", default: 500.000, step: 0.001 },
      { id: "ptSta", labelTh: "สเตชั่น PT (m)", labelEn: "PT Station (m)", unit: "m", type: "number", default: 195.0, step: 1.0 },
      { id: "ptN", labelTh: "พิกัด PT (N)", labelEn: "PT Northing (N)", unit: "m", type: "number", default: 1070.000, step: 0.001 },
      { id: "ptE", labelTh: "พิกัด PT (E)", labelEn: "PT Easting (E)", unit: "m", type: "number", default: 580.000, step: 0.001 },
      { id: "radius", labelTh: "รัศมี R (+ขวา, -ซ้าย)", labelEn: "Radius R (+Right, -Left)", unit: "m", type: "number", default: 200.0, step: 1.0 }
    ],
    outputs: [
      { id: "curveLength", labelTh: "ความยาวโค้งทั้งหมด (L)", labelEn: "Curve Length (L)", unit: "m" },
      { id: "deltaAngle", labelTh: "มุมเบี่ยงเบนรวม (Δ)", labelEn: "Total Deflection (Δ)", unit: "DMS" },
      { id: "extDist", labelTh: "ระยะภายนอกโค้ง (E)", labelEn: "External Distance (E)", unit: "m" },
      { id: "moDist", labelTh: "ระยะยกกึ่งกลาง (Mo)", labelEn: "Middle Ordinate (Mo)", unit: "m" },
      { id: "chordTotal", labelTh: "ระยะคอร์ดยาว (Long Chord)", labelEn: "Long Chord (PC-PT)", unit: "m" }
    ],
    formulas: {
      latex: "L = \\text{Sta}_{\\text{PT}} - \\text{Sta}_{\\text{PC}} \\\\[6pt] \\Delta = \\frac{L}{|R|} \\times \\frac{180}{\\pi} \\\\[6pt] M_o = |R| \\cdot \\left(1 - \\cos\\left(\\frac{\\Delta}{2}\\right)\\right) \\\\[6pt] E = |R| \\cdot \\left(\\sec\\left(\\frac{\\Delta}{2}\\right) - 1\\right) \\\\[6pt] \\text{Long Chord} = 2 |R| \\sin\\left(\\frac{\\Delta}{2}\\right)",
      plain: "L = Sta_PT - Sta_PC\nΔ = (L / |R|) * (180 / π)\nMo = |R| * (1 - cos(Δ/2))\nE = |R| * (1 / cos(Δ/2) - 1)\nLong Chord = 2 * |R| * sin(Δ/2)"
    },
    stepsTh: [
      "1. กรอกสเตชั่นและพิกัดจุดเริ่มต้นโค้ง (PC) และจุดสิ้นสุดโค้ง (PT)",
      "2. กำหนดรัศมีความโค้ง R (ใส่ค่าบวกสำหรับโค้งเลี้ยวขวา, ค่าลบสำหรับโค้งเลี้ยวซ้าย)",
      "3. กด 'คำนวณ' เพื่อดูสรุปความยาวโค้ง มุมเบี่ยงเบนรวม และระยะยกกึ่งกลาง Mo",
      "4. ส่งออกตารางสเตชั่นเพื่อนำไปวางหมุดในสนามด้วยกล้อง Total Station"
    ],
    stepsEn: [
      "1. Input chainage and coordinates for PC and PT.",
      "2. Input curve radius R (+ positive for right turn, - negative for left turn).",
      "3. Tap 'Calculate' to resolve curve length, total deflection, and middle ordinate.",
      "4. Export stakeout schedule for field execution."
    ],
    example: {
      descTh: "PC Sta 100.000, PT Sta 195.000, R = +200 ม. -> L = 95.000 ม., Δ = 27° 12' 55.78\", Mo = 5.619 ม., E = 5.781 ม.",
      descEn: "PC Sta 100.000, PT Sta 195.000, R = +200 m -> L = 95.000 m, Δ = 27° 12' 55.78\", Mo = 5.619 m, E = 5.781 m"
    },
    tipsTh: "ข้อควรระวัง: โค้งเบี่ยงซ้ายต้องใส่เครื่องหมายลบหน้าค่า R เสมอ มิฉะนั้นทิศทางการคำนวณจะเลี้ยวผิดด้าน",
    tipsEn: "Always enter negative radius for left-turning curves to maintain proper angular orientation.",
    highlightsTh: [
      "คำนวณองค์ประกอบเรขาคณิตโค้งวงกลมครบถ้วน: ความยาวโค้ง (L), มุมเบี่ยงเบน (Δ), ระยะภายนอก (E), และระยะยกกลาง (Mo)",
      "สร้างตารางวางแนวโค้งรายสเตชั่น (Deflection Angle & Chord) ทุกช่วงระยะที่กำหนด พร้อมพิกัด N, E",
      "รองรับทั้งโค้งเลี้ยวขวา (+R) และโค้งเลี้ยวซ้าย (-R) พร้อมปรับแก้พิกัดบรรจบจุด PT ด้วย Compass Rule",
      "แผนภาพกราฟิกโค้งแบบไดนามิก แสดงเส้นสัมผัส จุด PC, PI, PT และแนวโค้งจริงเพื่อตรวจสอบก่อนลงหมุดสนาม"
    ],
    highlightsEn: [
      "Resolves complete circular curve geometry: Curve Length (L), Deflection (Δ), External (E), and Middle Ordinate (Mo)",
      "Generates station-by-station setting out tables (Deflection Angles & Sub-chords) with coordinates at any interval",
      "Supports right-hand (+R) and left-hand (-R) curves with Compass Rule adjustment closing precisely onto PT",
      "Dynamic visual curve diagram rendering tangents, PC, PI, PT nodes, and arc geometry before staking"
    ],
    calculate: (inputs) => {
      const pc = inputs.pcSta || 0;
      const pt = inputs.ptSta || 0;
      const r = Math.abs(inputs.radius || 200);
      const L = pt - pc;
      const deltaRad = (L / r);
      const deltaDeg = deltaRad * 180 / Math.PI;
      const deg = Math.floor(deltaDeg);
      const minFull = (deltaDeg - deg) * 60;
      const min = Math.floor(minFull);
      const sec = ((minFull - min) * 60).toFixed(2);
      const halfDeltaRad = deltaRad / 2;
      const mo = r * (1 - Math.cos(halfDeltaRad));
      const ext = r * (1 / Math.cos(halfDeltaRad) - 1);
      const lc = 2 * r * Math.sin(halfDeltaRad);
      return {
        curveLength: L.toFixed(3) + " m",
        deltaAngle: `${deg}° ${min.toString().padStart(2, '0')}' ${sec.padStart(5, '0')}"`,
        extDist: ext.toFixed(3) + " m",
        moDist: mo.toFixed(3) + " m",
        chordTotal: lc.toFixed(3) + " m"
      };
    }
  },

  {
    id: "v-curve",
    num: 5,
    nameTh: "ตำแหน่งโค้งดิ่ง (V-Curve)",
    nameEn: "S-O Curve V",
    subtitleTh: "งานวางโค้งดิ่ง",
    subtitleEn: "Vertical Parabolic Curve Setting Out",
    category: "curve",
    isPro: true,
    icon: "fa-solid fa-chart-line",
    summaryTh: "ออกแบบและคำนวณระดับหลังทางโค้งดิ่งพาราโบลา รองรับทั้งโค้งยอดเขา (Crest) และโค้งก้นกระทะ (Sag) ทุกช่วงสเตชั่น",
    summaryEn: "Calculates design elevations along parabolic vertical curves for crest and sag profiles at specified station intervals.",
    keywords: ["v-curve", "vertical", "โค้งดิ่ง", "pvi", "pvc", "pvt", "lvc", "grade", "crest", "sag", "ระดับหลังทาง"],
    overviewTh: "โค้งดิ่งพาราโบลาใช้เชื่อมต่อความลาดชันสองแนว (g1, g2) ในแนวดิ่งของถนนและทางรถไฟ เพื่อให้ผู้ขับขี่มองเห็นระยะปลอดภัยและมีความนุ่มนวลในการขับขี่ โปรแกรมนี้คำนวณระดับหลังทางที่จุด PVC, PVI, PVT และทุกสเตชั่นย่อย พร้อมวิเคราะห์จุดสูงสุด/ต่ำสุดของโค้งดิ่ง",
    overviewEn: "Parabolic vertical curves connect entry and exit grades (g1, g2) on highway profiles to ensure stopping sight distance and ride comfort. This tool calculates elevations at PVC, PVI, PVT, and intermediate chainages.",
    standardTh: "มาตรฐานเรขาคณิตสายทาง กรมทางหลวง (AASHTO Parabolic Vertical Curves)",
    standardEn: "AASHTO Geometric Design Guidelines for Vertical Curves",
    inputs: [
      { id: "pviSta", labelTh: "สเตชั่น PVI (m)", labelEn: "PVI Station (m)", unit: "m", type: "number", default: 500.0, step: 1.0 },
      { id: "pviElev", labelTh: "ระดับ PVI (m)", labelEn: "PVI Elevation (m)", unit: "m", type: "number", default: 100.000, step: 0.001 },
      { id: "lvc", labelTh: "ความยาวโค้งดิ่ง LVC (m)", labelEn: "Curve Length LVC (m)", unit: "m", type: "number", default: 200.0, step: 10.0 },
      { id: "g1", labelTh: "ลาดเข้า g1 (%)", labelEn: "Entry Grade g1 (%)", unit: "%", type: "number", default: 3.0, step: 0.1 },
      { id: "g2", labelTh: "ลาดออก g2 (%)", labelEn: "Exit Grade g2 (%)", unit: "%", type: "number", default: -1.0, step: 0.1 }
    ],
    outputs: [
      { id: "pvc", labelTh: "สเตชั่น & ระดับ PVC", labelEn: "PVC Station & Elev", unit: "" },
      { id: "pvt", labelTh: "สเตชั่น & ระดับ PVT", labelEn: "PVT Station & Elev", unit: "" },
      { id: "diffA", labelTh: "ผลต่างความลาดชัน (A)", labelEn: "Grade Difference (A)", unit: "%" },
      { id: "mo", labelTh: "ระยะยกกึ่งกลาง (Mo)", labelEn: "Middle Ordinate (Mo)", unit: "m" },
      { id: "curveType", labelTh: "ประเภทโค้งดิ่ง", labelEn: "Curve Classification", unit: "" }
    ],
    formulas: {
      latex: "\\text{Sta}_{\\text{PVC}} = \\text{Sta}_{\\text{PVI}} - \\frac{\\text{LVC}}{2}, \\quad \\text{Elev}_{\\text{PVC}} = \\text{Elev}_{\\text{PVI}} - \\left(\\frac{g_1}{100}\\right)\\frac{\\text{LVC}}{2} \\\\[6pt] A = g_2 - g_1, \\quad M_o = \\frac{|A|}{100} \\times \\frac{\\text{LVC}}{8} \\\\[6pt] \\text{Elev}(x) = \\text{Elev}_{\\text{PVC}} + \\left(\\frac{g_1}{100}\\right)x + \\left(\\frac{g_2 - g_1}{200 \\cdot \\text{LVC}}\\right)x^2",
      plain: "Sta_PVC = Sta_PVI - LVC/2\nElev_PVC = Elev_PVI - (g1/100)*(LVC/2)\nSta_PVT = Sta_PVI + LVC/2\nElev_PVT = Elev_PVI + (g2/100)*(LVC/2)\nA = g2 - g1\nMo = (|A|/100) * (LVC/8)\nElev(x) = Elev_PVC + (g1/100)*x + ((g2 - g1)/(200 * LVC)) * x²"
    },
    stepsTh: [
      "1. กรอกสเตชั่นและระดับความสูงของจุดตัดแนวดิ่ง PVI",
      "2. กำหนดความยาวโค้งดิ่ง LVC",
      "3. ระบุความลาดชันทางเข้า (g1%) และทางออก (g2%)",
      "4. กด 'คำนวณ' เพื่อรับระดับ PVC, PVT, ระยะยก Mo และชนิดของโค้ง",
      "5. ส่งออกตารางระดับทุกช่วง 25 ม. ให้ทีมควบคุมเกรดเดอร์หน้างาน"
    ],
    stepsEn: [
      "1. Input PVI station and elevation.",
      "2. Input length of vertical curve (LVC).",
      "3. Enter entry grade g1% and exit grade g2%.",
      "4. Tap 'Calculate' to evaluate PVC, PVT, Mo, and crest/sag profile.",
      "5. Export subgrade elevation schedule for field grading crews."
    ],
    example: {
      descTh: "PVI Sta 500.000 (Elev 100.000), LVC 200m, g1=+3%, g2=-1% -> PVC Sta 400.000 (97.000m), PVT Sta 600.000 (99.000m), Mo=1.000m (Crest)",
      descEn: "PVI Sta 500.000 (Elev 100.000), LVC 200m, g1=+3%, g2=-1% -> PVC Sta 400.000 (97.000m), PVT Sta 600.000 (99.000m), Mo=1.000m (Crest)"
    },
    tipsTh: "ค่าความลาดชันต้องใส่เครื่องหมายกำกับเสมอ เช่น ลาดลงให้ใส่เครื่องหมายลบ (-1.0%)",
    tipsEn: "Always include negative signs for descending downhill grades (e.g. -1.0%).",
    highlightsTh: [
      "ออกแบบและคำนวณระดับหลังทางโค้งดิ่งพาราโบลา รองรับทั้งโค้งยอดเขา (Crest) และโค้งก้นกระทะ (Sag)",
      "คำนวณตำแหน่งและระดับของจุดสูงสุด (High Point) หรือจุดต่ำสุด (Low Point) อัตโนมัติสำหรับงานระบายน้ำ",
      "สร้างตารางระดับหลังทางทุกช่วงสเตชั่นย่อย (เช่น ทุก 10 ม. หรือ 25 ม.) สำหรับควบคุมรถเกรดเดอร์หน้างาน",
      "กราฟิกจำลองภาพตัดตามยาว แสดงแนวลาดชันทางเข้า (g1), ทางออก (g2), จุดตัด PVI, PVC/PVT และระยะยก Mo"
    ],
    highlightsEn: [
      "Computes parabolic vertical curve design elevations for highway crest and sag profiles with millimeter accuracy",
      "Automatically identifies station and elevation of the critical High Point or Low Point for drainage design",
      "Generates subgrade elevation schedules at user-defined intervals (e.g. 10m or 25m) for grader control",
      "Dynamic profile sketch displaying entry grade (g1), exit grade (g2), PVI intersection, PVC/PVT, and middle ordinate Mo"
    ],
    calculate: (inputs) => {
      const pviS = inputs.pviSta || 0;
      const pviE = inputs.pviElev || 0;
      const lvc = inputs.lvc || 200;
      const g1 = inputs.g1 || 0;
      const g2 = inputs.g2 || 0;
      const pvcS = pviS - lvc / 2;
      const pvtS = pviS + lvc / 2;
      const pvcE = pviE - (g1 / 100) * (lvc / 2);
      const pvtE = pviE + (g2 / 100) * (lvc / 2);
      const A = g2 - g1;
      const mo = (Math.abs(A) / 100) * (lvc / 8);
      const isCrest = A < 0;
      return {
        pvc: `Sta ${pvcS.toFixed(3)} (Elev: ${pvcE.toFixed(3)} m)`,
        pvt: `Sta ${pvtS.toFixed(3)} (Elev: ${pvtE.toFixed(3)} m)`,
        diffA: (A >= 0 ? "+" : "") + A.toFixed(2) + " %",
        mo: mo.toFixed(3) + " m",
        curveType: isCrest ? "โค้งยอดเขา (Crest Curve)" : "โค้งก้นกระทะ (Sag Curve)"
      };
    }
  },

  {
    id: "axial-offset",
    num: 6,
    nameTh: "ออฟเซ็ตแกน",
    nameEn: "Axial-Rectangle Offset",
    subtitleTh: "รูปสี่เหลี่ยม",
    subtitleEn: "Batter Board Grid Layout",
    category: "offset",
    isPro: true,
    icon: "fa-solid fa-crosshairs",
    summaryTh: "คำนวณพิกัดหมุดอ้างอิงผังคอก 4 ทิศทางนอกหลุมขุดเจาะฐานราก พร้อมสร้างภาพร่าง CAD หมุนตามทิศเหนือจริง",
    summaryEn: "Computes 4 external batter board reference marks outside excavation pits with real-north oriented CAD sketch.",
    keywords: ["offset", "axial", "ผังคอก", "ฐานราก", "ตอม่อ", "สี่เหลี่ยม", "batter board", "grid"],
    overviewTh: "เมื่อต้องขุดดินเปิดหน้างานสำหรับฐานรากหรือตอม่อสะพาน หมุดจุดศูนย์กลางจะสูญหายทันที ช่างสำรวจจึงต้องทำ 'ผังคอก' หรือหมุดออฟเซ็ตแกนออกไป 4 ทิศทาง (หน้า, หลัง, ซ้าย, ขวา) นอกเขตก่อสร้าง เครื่องมือนี้คำนวณพิกัดของหมุดทั้ง 4 จุดตามแนวแกนเอียงของอาคาร พร้อมสร้างภาพร่างผังคอกที่หมุนตามทิศเหนือจริง",
    overviewEn: "During deep foundation excavation, center points are destroyed. Surveyors establish offset batter boards in 4 directions (Front, Rear, Left, Right) outside excavation lines. This tool calculates these 4 reference marks along any structural orientation.",
    standardTh: "มาตรฐานงานวางผังอาคารและงานวิศวกรรมฐานราก (Building Batter Board Standards)",
    standardEn: "Building Setting Out & Batter Board Alignment Codes",
    inputs: [
      { id: "cenN", labelTh: "พิกัดกึ่งกลาง N (Center N)", labelEn: "Center Northing (N)", unit: "m", type: "number", default: 1000.000, step: 0.001 },
      { id: "cenE", labelTh: "พิกัดกึ่งกลาง E (Center E)", labelEn: "Center Easting (E)", unit: "m", type: "number", default: 500.000, step: 0.001 },
      { id: "azimuth", labelTh: "ทิศทางโครงสร้าง (องศา)", labelEn: "Structure Azimuth (Deg)", unit: "deg", type: "number", default: 0.0, step: 0.1 },
      { id: "upDist", labelTh: "ระยะออฟเซ็ต หน้า (Up)", labelEn: "Offset Forward (Up)", unit: "m", type: "number", default: 6.0, step: 0.5 },
      { id: "dnDist", labelTh: "ระยะออฟเซ็ต หลัง (Down)", labelEn: "Offset Backward (Down)", unit: "m", type: "number", default: 6.0, step: 0.5 },
      { id: "ltDist", labelTh: "ระยะออฟเซ็ต ซ้าย (Left)", labelEn: "Offset Left", unit: "m", type: "number", default: 4.0, step: 0.5 },
      { id: "rtDist", labelTh: "ระยะออฟเซ็ต ขวา (Right)", labelEn: "Offset Right", unit: "m", type: "number", default: 4.0, step: 0.5 }
    ],
    outputs: [
      { id: "ptUp", labelTh: "หมุดหน้า (Up - Point 1)", labelEn: "Forward Mark (Point 1)", unit: "m" },
      { id: "ptRt", labelTh: "หมุดขวา (Right - Point 2)", labelEn: "Right Mark (Point 2)", unit: "m" },
      { id: "ptDn", labelTh: "หมุดหลัง (Down - Point 3)", labelEn: "Backward Mark (Point 3)", unit: "m" },
      { id: "ptLt", labelTh: "หมุดซ้าย (Left - Point 4)", labelEn: "Left Mark (Point 4)", unit: "m" }
    ],
    formulas: {
      latex: "\\text{Az}_1 = \\text{Azi}_{\\text{struct}}, \\quad \\text{Az}_2 = (\\text{Azi} + 90^{\\circ}) \\bmod 360^{\\circ} \\\\[6pt] \\text{Az}_3 = (\\text{Azi} + 180^{\\circ}) \\bmod 360^{\\circ}, \\quad \\text{Az}_4 = (\\text{Azi} + 270^{\\circ}) \\bmod 360^{\\circ} \\\\[6pt] N_i = N_{\\text{center}} + D_i \\cdot \\cos(\\text{Az}_i), \\quad E_i = E_{\\text{center}} + D_i \\cdot \\sin(\\text{Az}_i)",
      plain: "Az_1 = Az_struct (หน้า)\nAz_2 = Az_struct + 90° (ขวา)\nAz_3 = Az_struct + 180° (หลัง)\nAz_4 = Az_struct + 270° (ซ้าย)\nNi = N_cen + Dist_i * cos(Az_i)\nEi = E_cen + Dist_i * sin(Az_i)"
    },
    stepsTh: [
      "1. กรอกพิกัดจุดกึ่งกลางของฐานราก (Center N, E)",
      "2. กำหนดทิศทางแนวแกนโครงสร้าง (Azimuth)",
      "3. ระบุระยะออฟเซ็ตออกไป 4 ทิศทาง (หน้า, หลัง, ซ้าย, ขวา) ให้อยู่นอกเขตรบกวนของเครื่องจักร",
      "4. กด 'คำนวณ' เพื่อรับพิกัดหมุดผังคอกทั้ง 4 จุด",
      "5. ตอกหมุดอ้างอิงและขึงเอ็นตรวจสอบแนวศูนย์กลาง"
    ],
    stepsEn: [
      "1. Enter foundation center coordinates (N, E).",
      "2. Input structural baseline azimuth.",
      "3. Define offset distances in 4 directions safe from machinery.",
      "4. Tap 'Calculate' to resolve the 4 batter board coordinates.",
      "5. Drive control pegs and pull stringlines to verify center intersection."
    ],
    example: {
      descTh: "กึ่งกลาง (1000, 500), Az=0°, หน้า/หลัง 6 ม., ซ้าย/ขวา 4 ม. -> ได้จุดบนแกน N=1006, 994 และ E=504, 496",
      descEn: "Center (1000, 500), Az=0°, Up/Down 6m, Left/Right 4m -> Axis points N=1006, 994 and E=504, 496"
    },
    tipsTh: "ระยะออฟเซ็ตควรกำหนดให้พ้นระยะสวิงของแขนรถแบ็คโฮเพื่อป้องกันหมุดผังคอกถูกขุดทำลาย",
    tipsEn: "Set offset distances beyond excavator swing radiuses to protect survey control stakes.",
    highlightsTh: [
      "คำนวณพิกัดหมุดผังคอก (Batter Boards) 4 ทิศทาง (หน้า, หลัง, ซ้าย, ขวา) อยู่นอกเขตรบกวนของเครื่องจักรขุดดิน",
      "กำหนดระยะออฟเซ็ตอิสระทั้ง 4 ด้าน และหมุนปรับตามทิศทางแนวแกนโครงสร้าง (Azimuth) ได้ทุกองศา",
      "กราฟิกจำลองผังคอกและแนวขึงเอ็นตัดจุดศูนย์กลาง ป้องกันหมุดสูญหายเมื่อเปิดหน้าดินฐานราก",
      "ส่งออกตารางพิกัดหมุดอ้างอิงทั้ง 4 จุดเป็นเอกสาร PDF สำหรับทีมช่างวางผังและเข้าแบบหล่อหน้างาน"
    ],
    highlightsEn: [
      "Calculates 4 external batter board reference marks (Front, Rear, Left, Right) positioned safely outside excavation pits",
      "Supports independent offset distances on all 4 sides rotated along any structural gridline azimuth",
      "Interactive canvas sketch showing batter boards and stringline intersection ensuring zero loss of centerlines",
      "Exports setting-out coordinate schedules to standard PDF ready for immediate field staking and formwork crews"
    ],
    calculate: (inputs) => {
      const az = (inputs.azimuth || 0) * Math.PI / 180;
      const cN = inputs.cenN || 0;
      const cE = inputs.cenE || 0;
      const upN = cN + (inputs.upDist || 0) * Math.cos(az);
      const upE = cE + (inputs.upDist || 0) * Math.sin(az);
      const rtN = cN + (inputs.rtDist || 0) * Math.cos(az + Math.PI / 2);
      const rtE = cE + (inputs.rtDist || 0) * Math.sin(az + Math.PI / 2);
      const dnN = cN + (inputs.dnDist || 0) * Math.cos(az + Math.PI);
      const dnE = cE + (inputs.dnDist || 0) * Math.sin(az + Math.PI);
      const ltN = cN + (inputs.ltDist || 0) * Math.cos(az + 3 * Math.PI / 2);
      const ltE = cE + (inputs.ltDist || 0) * Math.sin(az + 3 * Math.PI / 2);
      return {
        ptUp: `N: ${upN.toFixed(3)}, E: ${upE.toFixed(3)}`,
        ptRt: `N: ${rtN.toFixed(3)}, E: ${rtE.toFixed(3)}`,
        ptDn: `N: ${dnN.toFixed(3)}, E: ${dnE.toFixed(3)}`,
        ptLt: `N: ${ltN.toFixed(3)}, E: ${ltE.toFixed(3)}`
      };
    }
  },

  {
    id: "corner-offset",
    num: 7,
    nameTh: "ออฟเซ็ตขอบมุม",
    nameEn: "Corner-Rectangle Offset",
    subtitleTh: "รูปสี่เหลี่ยม",
    subtitleEn: "Column & Footing Corners",
    category: "offset",
    isPro: true,
    icon: "fa-solid fa-vector-square",
    summaryTh: "หาพิกัดมุมทั้ง 4 ด้านของตอม่อ ฐานราก หรืออาคารสี่เหลี่ยมผืนผ้าที่เอียงตามแนวแกนใดๆ เพื่อการตีเต๊าเข้าแบบหล่อ",
    summaryEn: "Computes the exact 4 corner coordinates of rectangular footings, columns, or pads oriented along any azimuth.",
    keywords: ["corner", "offset", "ขอบมุม", "ตอม่อ", "ฐานราก", "แบบหล่อ", "ตีเต๊า", "footing", "pad"],
    overviewTh: "ในขณะที่ Tool 6 คำนวณหมุดอ้างอิงบนแกน Tool 7 นี้คำนวณพิกัดของ 'มุมทั้ง 4 จุด' ของโครงสร้างสี่เหลี่ยมผืนผ้าจริง (บนซ้าย, บนขวา, ล่างขวา, ล่างซ้าย) โดยรองรับมุมเอียงของอาคารใดๆ ช่วยให้ช่างสำรวจวางหมุดตีเต๊าสำหรับติดตั้งแบบหล่อคอนกรีตได้ตรงเป๊ะ",
    overviewEn: "While Tool 6 computes axial projection marks, Tool 7 computes the physical 4 corner coordinates of rectangular footings or piers oriented along any azimuth. Essential for formwork and concrete setting.",
    standardTh: "มาตรฐานงานคอนกรีตโครงสร้างและแบบหล่อ (ACI Formwork Placement Tolerances)",
    standardEn: "ACI Concrete Formwork Alignment Standards",
    inputs: [
      { id: "cenN", labelTh: "พิกัดกึ่งกลาง N", labelEn: "Center Northing (N)", unit: "m", type: "number", default: 1000.000, step: 0.001 },
      { id: "cenE", labelTh: "พิกัดกึ่งกลาง E", labelEn: "Center Easting (E)", unit: "m", type: "number", default: 500.000, step: 0.001 },
      { id: "azimuth", labelTh: "ทิศทางโครงสร้าง (องศา)", labelEn: "Structure Azimuth (Deg)", unit: "deg", type: "number", default: 45.0, step: 0.1 },
      { id: "halfLen", labelTh: "ครึ่งความยาว หน้า/หลัง", labelEn: "Half Length (Up/Down)", unit: "m", type: "number", default: 2.0, step: 0.1 },
      { id: "halfWid", labelTh: "ครึ่งความกว้าง ซ้าย/ขวา", labelEn: "Half Width (Left/Right)", unit: "m", type: "number", default: 1.0, step: 0.1 }
    ],
    outputs: [
      { id: "c1", labelTh: "มุมที่ 1 (บนซ้าย - C1)", labelEn: "Corner 1 (Top-Left)", unit: "m" },
      { id: "c2", labelTh: "มุมที่ 2 (บนขวา - C2)", labelEn: "Corner 2 (Top-Right)", unit: "m" },
      { id: "c3", labelTh: "มุมที่ 3 (ล่างขวา - C3)", labelEn: "Corner 3 (Bottom-Right)", unit: "m" },
      { id: "c4", labelTh: "มุมที่ 4 (ล่างซ้าย - C4)", labelEn: "Corner 4 (Bottom-Left)", unit: "m" },
      { id: "diag", labelTh: "ระยะทแยงมุมตรวจสอบ", labelEn: "Diagonal Check", unit: "m" }
    ],
    formulas: {
      latex: "N_{C1} = N_{\\text{cen}} + L \\cos(\\text{Az}) + W \\sin(\\text{Az}), \\quad E_{C1} = E_{\\text{cen}} + L \\sin(\\text{Az}) - W \\cos(\\text{Az}) \\\\[6pt] N_{C2} = N_{\\text{cen}} + L \\cos(\\text{Az}) - W \\sin(\\text{Az}), \\quad E_{C2} = E_{\\text{cen}} + L \\sin(\\text{Az}) + W \\cos(\\text{Az}) \\\\[6pt] \\text{Diagonal} = 2 \\times \\sqrt{L^2 + W^2}",
      plain: "พิกัดมุมทั้ง 4 คำนวณจากการประกอบเวกเตอร์ครึ่งความยาวและครึ่งความกว้าง\nC1 (บนซ้าย): +L ตามแนวแกน, -W ด้านซ้าย\nC2 (บนขวา): +L ตามแนวแกน, +W ด้านขวา\nC3 (ล่างขวา): -L ตามแนวแกน, +W ด้านขวา\nC4 (ล่างซ้าย): -L ตามแนวแกน, -W ด้านซ้าย\nDiagonal = 2 * sqrt(HalfLength² + HalfWidth²)"
    },
    stepsTh: [
      "1. ป้อนพิกัดจุดกึ่งกลางของฐานรากหรือเสา",
      "2. ป้อนทิศทางแนวแกนอาคาร",
      "3. ระบุขนาดครึ่งความยาว (L/2) และครึ่งความกว้าง (W/2)",
      "4. กด 'คำนวณ' เพื่อรับพิกัดมุมทั้ง 4 และระยะทแยงมุมสำหรับดึงเทปเช็คฉาก"
    ],
    stepsEn: [
      "1. Input foundation center coordinates.",
      "2. Input building axis azimuth.",
      "3. Define half-length and half-width dimensions.",
      "4. Tap 'Calculate' to output 4 corner points and the diagonal verification length."
    ],
    example: {
      descTh: "ศูนย์กลาง (1000, 500), Az=45°, ครึ่งยาว 2 ม., ครึ่งกว้าง 1 ม. -> ทแยงมุม 4.472 ม.",
      descEn: "Center (1000, 500), Az=45°, Half-length 2m, Half-width 1m -> Diagonal 4.472 m"
    },
    tipsTh: "ตรวจสอบระยะทแยงมุมหน้างานเสมอ: ระยะจาก C1 ถึง C3 ต้องเท่ากับ C2 ถึง C4 ทุกมิลลิเมตร แสดงว่าได้ฉากสมบูรณ์",
    tipsEn: "Always check diagonals on site: Distance C1-C3 must match C2-C4 verifying true squareness.",
    highlightsTh: [
      "คำนวณพิกัดมุมทั้ง 4 ด้าน (C1, C2, C3, C4) ของฐานราก ตอม่อ หรืออาคารสี่เหลี่ยมผืนผ้าที่เอียงตามแนวแกนใดๆ",
      "สูตรคำนวณระยะทแยงมุมตรวจสอบ (Diagonal Check) ช่วยดึงตลับเมตรเช็คฉาก 90° หน้างานก่อนเทคอนกรีต",
      "แผนภาพเวกเตอร์แสดงตำแหน่งมุมและทิศทางการหมุนเทียบทิศเหนือจริง ป้องกันการวางแบบหล่อสลับด้าน",
      "ส่งออกเอกสารพิกัดขอบมุมพร้อมบล็อกลงนามตรวจสอบความถูกต้องของแบบหล่อคอนกรีตตามมาตรฐาน ACI"
    ],
    highlightsEn: [
      "Computes exact 4 corner coordinates (C1, C2, C3, C4) for rectangular footings, piers, or pads at any rotation angle",
      "Built-in diagonal check formula enabling tape-measure squareness verification (90° corners) before concrete pours",
      "Vector graphic display illustrating corner orientations relative to true north, preventing rotated formwork mistakes",
      "One-tap PDF export with corner coordinates and signature blocks for QA/QC formwork inspection sign-off"
    ],
    calculate: (inputs) => {
      const az = (inputs.azimuth || 0) * Math.PI / 180;
      const cN = inputs.cenN || 0;
      const cE = inputs.cenE || 0;
      const L = inputs.halfLen || 0;
      const W = inputs.halfWid || 0;
      const cosA = Math.cos(az);
      const sinA = Math.sin(az);
      // Centerline forward unit vector: (cosA, sinA) in (N, E)
      // Perpendicular right unit vector (+W): (-sinA, cosA)
      // Perpendicular left unit vector (-W): (+sinA, -cosA)
      // C1 (Top-Left): Forward (+L), Left (-W)
      const c1N = cN + L * cosA + W * sinA;
      const c1E = cE + L * sinA - W * cosA;
      // C2 (Top-Right): Forward (+L), Right (+W)
      const c2N = cN + L * cosA - W * sinA;
      const c2E = cE + L * sinA + W * cosA;
      // C3 (Bottom-Right): Backward (-L), Right (+W)
      const c3N = cN - L * cosA - W * sinA;
      const c3E = cE - L * sinA + W * cosA;
      // C4 (Bottom-Left): Backward (-L), Left (-W)
      const c4N = cN - L * cosA + W * sinA;
      const c4E = cE - L * sinA - W * cosA;
      const diag = 2 * Math.hypot(L, W);
      return {
        c1: `N: ${c1N.toFixed(3)}, E: ${c1E.toFixed(3)}`,
        c2: `N: ${c2N.toFixed(3)}, E: ${c2E.toFixed(3)}`,
        c3: `N: ${c3N.toFixed(3)}, E: ${c3E.toFixed(3)}`,
        c4: `N: ${c4N.toFixed(3)}, E: ${c4E.toFixed(3)}`,
        diag: diag.toFixed(3) + " m"
      };
    }
  },

  {
    id: "online-offset",
    num: 8,
    nameTh: "ออฟเซ็ตไลน์",
    nameEn: "Online Offset",
    subtitleTh: "ระยะตามแนวเส้น",
    subtitleEn: "Baseline Station & Offset Staking",
    category: "offset",
    isPro: false,
    icon: "fa-solid fa-arrows-left-right",
    summaryTh: "วางพิกัดจุดกึ่งกลางและจุดเยื้องฉากซ้าย-ขวาบนแนวเส้นอ้างอิง เหมาะสำหรับงานวางท่อ ขอบทาง และแนวเสาเข็ม",
    summaryEn: "Computes centerline station coordinates and perpendicular left/right offset points along a baseline.",
    keywords: ["online", "offset", "แนวเส้น", "ท่อระบายน้ำ", "ขอบทาง", "baseline", "station", "chainage"],
    overviewTh: "เหมาะสำหรับงานวางแนวสาธารณูปโภค เช่น ท่อระบายน้ำ ขอบคันหิน แนวรั้ว หรือแถวเสาเข็ม โดยกำหนดเส้นฐาน (Baseline) จากพิกัดสองจุดหรือจาก Azimuth จากนั้นระบุระยะทางตามแนวเส้น และระยะเยื้องฉากไปทางซ้ายหรือขวา โปรแกรมจะคำนวณพิกัดของจุด Centerline และจุด Offset ซ้าย/ขวาให้ทันที",
    overviewEn: "Ideal for utilities, pipelines, curbs, or pile rows. Given a baseline defined by two points or an azimuth, it computes target coordinates at any station distance along the line and perpendicular left/right offsets.",
    standardTh: "มาตรฐานงานสำรวจเส้นทางและวางท่อสาธารณูปโภค (Pipeline & Route Setting Out)",
    standardEn: "Linear Utility Staking Specifications",
    inputs: [
      { id: "stN", labelTh: "จุดเริ่มต้นเส้นฐาน N", labelEn: "Baseline Start N", unit: "m", type: "number", default: 1000.000, step: 0.001 },
      { id: "stE", labelTh: "จุดเริ่มต้นเส้นฐาน E", labelEn: "Baseline Start E", unit: "m", type: "number", default: 500.000, step: 0.001 },
      { id: "lineAz", labelTh: "ทิศทางเส้นฐาน (องศา)", labelEn: "Baseline Azimuth (Deg)", unit: "deg", type: "number", default: 45.0, step: 0.1 },
      { id: "chDist", labelTh: "ระยะบนแนวเส้น (Chainage)", labelEn: "Distance on Line", unit: "m", type: "number", default: 100.000, step: 1.0 },
      { id: "osLeft", labelTh: "ระยะเยื้องซ้าย (Offset L)", labelEn: "Offset Left", unit: "m", type: "number", default: 10.000, step: 0.5 },
      { id: "osRight", labelTh: "ระยะเยื้องขวา (Offset R)", labelEn: "Offset Right", unit: "m", type: "number", default: 15.000, step: 0.5 }
    ],
    outputs: [
      { id: "ptCenter", labelTh: "จุดบนแนวเส้น ([Name]-C)", labelEn: "Centerline Point", unit: "m" },
      { id: "ptLeft", labelTh: "จุดเยื้องซ้าย ([Name]-L)", labelEn: "Left Offset Point", unit: "m" },
      { id: "ptRight", labelTh: "จุดเยื้องขวา ([Name]-R)", labelEn: "Right Offset Point", unit: "m" }
    ],
    formulas: {
      latex: "N_C = N_{\\text{start}} + D \\cos(\\text{Az}), \\quad E_C = E_{\\text{start}} + D \\sin(\\text{Az}) \\\\[6pt] N_L = N_C + d_L \\cos(\\text{Az} - 90^{\\circ}), \\quad E_L = E_C + d_L \\sin(\\text{Az} - 90^{\\circ}) \\\\[6pt] N_R = N_C + d_R \\cos(\\text{Az} + 90^{\\circ}), \\quad E_R = E_C + d_R \\sin(\\text{Az} + 90^{\\circ})",
      plain: "N_center = N_start + Dist * cos(Az)\nE_center = E_start + Dist * sin(Az)\nN_left = N_center + dL * cos(Az - 90°)\nE_left = E_center + dL * sin(Az - 90°)\nN_right = N_center + dR * cos(Az + 90°)\nE_right = E_center + dR * sin(Az + 90°)"
    },
    stepsTh: [
      "1. กรอกพิกัดจุดเริ่มต้นของเส้นฐานและค่ามุม Azimuth",
      "2. ระบุระยะทางที่ต้องการวางหมุดตามแนวเส้น",
      "3. ระบุระยะเยื้องฉากซ้ายและขวา",
      "4. กด 'คำนวณ' เพื่อรับพิกัด Centerline, Left, และ Right"
    ],
    stepsEn: [
      "1. Input baseline start coordinates and azimuth.",
      "2. Specify station distance along the line.",
      "3. Specify perpendicular left and right offset distances.",
      "4. Tap 'Calculate' to output Center, Left, and Right coordinates."
    ],
    example: {
      descTh: "เริ่ม (1000, 500), Az=45°, ระยะ 100 ม., ออฟเซ็ตซ้าย 10 ม., ขวา 15 ม.",
      descEn: "Start (1000, 500), Az=45°, Distance 100m, Left 10m, Right 15m"
    },
    tipsTh: "การระบุทิศทางซ้าย/ขวา อ้างอิงตามทิศทางการมองมุ่งหน้าไปตามเส้นทาง (ตามทิศทาง Azimuth)",
    tipsEn: "Left and right directions are determined relative to facing forward along the baseline azimuth.",
    highlightsTh: [
      "คำนวณพิกัดจุดกึ่งกลาง (Centerline) และจุดเยื้องฉากซ้าย-ขวาพร้อมกันตามระยะสเตชั่นบนเส้นฐาน (Baseline)",
      "เหมาะสำหรับงานวางท่อระบายน้ำ แนวคันหิน (Curb & Gutter) แนวรั้วเขตทาง และแถวเสาเข็ม",
      "รองรับระยะออฟเซ็ตอิสระด้านซ้ายและขวา ไม่จำเป็นต้องเท่ากัน ช่วยให้ทำงานขนานสิ่งกีดขวางได้คล่องตัว",
      "กราฟิกแสดงเส้นทางหลักและปีกออฟเซ็ตตั้งฉาก พร้อมส่งออกรายงานพิกัดสำหรับการส่องกล้องวางหมุดสนาม"
    ],
    highlightsEn: [
      "Simultaneously solves centerline coordinates and perpendicular left/right offsets at any chainage along a baseline",
      "Tailored for utility trenches, stormwater drainage, curb & gutter staking, highway ROW fences, and pile rows",
      "Supports independent left and right offset dimensions, accommodating asymmetric field boundaries and site obstacles",
      "Visual baseline diagram with perpendicular offset wings and one-click PDF setting-out schedule export"
    ],
    calculate: (inputs) => {
      const az = (inputs.lineAz || 0) * Math.PI / 180;
      const sN = inputs.stN || 0;
      const sE = inputs.stE || 0;
      const d = inputs.chDist || 0;
      const dL = inputs.osLeft || 0;
      const dR = inputs.osRight || 0;
      const cN = sN + d * Math.cos(az);
      const cE = sE + d * Math.sin(az);
      const lN = cN + dL * Math.cos(az - Math.PI / 2);
      const lE = cE + dL * Math.sin(az - Math.PI / 2);
      const rN = cN + dR * Math.cos(az + Math.PI / 2);
      const rE = cE + dR * Math.sin(az + Math.PI / 2);
      return {
        ptCenter: `N: ${cN.toFixed(3)}, E: ${cE.toFixed(3)}`,
        ptLeft: `N: ${lN.toFixed(3)}, E: ${lE.toFixed(3)}`,
        ptRight: `N: ${rN.toFixed(3)}, E: ${rE.toFixed(3)}`
      };
    }
  },

  {
    id: "traverse-book",
    num: 9,
    nameTh: "สมุดสนาม",
    nameEn: "Traverse Field Book",
    subtitleTh: "งานวงรอบ",
    subtitleEn: "2-Face Angle & Distance Reduction",
    category: "geodesy",
    isPro: true,
    icon: "fa-solid fa-book-journal-whills",
    summaryTh: "บันทึกการอ่านมุมราบ 2 หน้ากล้อง (Face L/R) หักล้าง Collimation Error คำนวณมุมเฉลี่ย และวาดผังร่างมุมราบอัตโนมัติ",
    summaryEn: "Digital field book for 2-face angle observations, systematic collimation error reduction, and station angle sketches.",
    keywords: ["traverse", "fieldbook", "สมุดสนาม", "วงรอบ", "2 หน้ากล้อง", "face left", "face right", "collimation"],
    overviewTh: "สมุดสนามอิเล็กทรอนิกส์สำหรับการรังวัดมุมราบโครงข่ายหมุดควบคุมวงรอบ บันทึกค่าอ่านจานองศาหน้าซ้าย (Face Left) และหน้าขวา (Face Right) เพื่อหักล้างความคลาดเคลื่อน Collimation Error และ Trunnion Axis Tilt ตามหลักวิศวกรรม พร้อมคำนวณมุมเฉลี่ยและออกรายงานสมุดสนามมาตรฐาน 8 คอลัมน์",
    overviewEn: "Electronic field book for geodetic control traverses. Records Face Left and Face Right circle readings to eliminate systematic collimation and tilt errors, computing set averages and mean station angles.",
    standardTh: "มาตรฐานงานวงรอบ กรมแผนที่ทหาร และกรมที่ดิน (Control Traverse Specifications)",
    standardEn: "Federal Geodetic Control Committee (FGCC) Traverse Standards",
    inputs: [
      { id: "bsL", labelTh: "ค่าอ่าน BS หน้าซ้าย (องศา)", labelEn: "BS Face Left (Deg)", unit: "deg", type: "number", default: 0.0, step: 0.001 },
      { id: "fsL", labelTh: "ค่าอ่าน FS หน้าซ้าย (องศา)", labelEn: "FS Face Left (Deg)", unit: "deg", type: "number", default: 85.5111, step: 0.001 },
      { id: "bsR", labelTh: "ค่าอ่าน BS หน้าขวา (องศา)", labelEn: "BS Face Right (Deg)", unit: "deg", type: "number", default: 180.0056, step: 0.001 },
      { id: "fsR", labelTh: "ค่าอ่าน FS หน้าขวา (องศา)", labelEn: "FS Face Right (Deg)", unit: "deg", type: "number", default: 265.5194, step: 0.001 }
    ],
    outputs: [
      { id: "angL", labelTh: "มุมสังเกตหน้าซ้าย (Obs L)", labelEn: "Observed Angle FL", unit: "DMS" },
      { id: "angR", labelTh: "มุมสังเกตหน้าขวา (Obs R)", labelEn: "Observed Angle FR", unit: "DMS" },
      { id: "meanAng", labelTh: "มุมเฉลี่ยประจำชุด (Mean)", labelEn: "Mean Set Angle", unit: "DMS" },
      { id: "diffLR", labelTh: "ผลต่างหน้าซ้าย-ขวา (Diff)", labelEn: "Face Difference", unit: "sec" }
    ],
    formulas: {
      latex: "\\text{Obs}_L = (\\text{FS}_L - \\text{BS}_L + 360^{\\circ}) \\bmod 360^{\\circ} \\\\[6pt] \\text{Obs}_R = (\\text{FS}_R - \\text{BS}_R + 360^{\\circ}) \\bmod 360^{\\circ} \\\\[6pt] \\text{Mean Angle} = \\frac{\\text{Obs}_L + \\text{Obs}_R}{2}",
      plain: "Obs_L = (FS_L - BS_L + 360) mod 360°\nObs_R = (FS_R - BS_R + 360) mod 360°\nMean = (Obs_L + Obs_R) / 2"
    },
    stepsTh: [
      "1. ตั้งกล้อง ส่องเป้าหมายหลัง (BS) อ่านจานองศาหน้าซ้าย",
      "2. ส่องเป้าหมายหน้า (FS) อ่านจานองศาหน้าซ้าย",
      "3. พลิกกล้องสลับหน้าเล็ง ส่อง FS อ่านจานองศาหน้าขวา",
      "4. ส่อง BS อ่านจานองศาหน้าขวา",
      "5. กด 'คำนวณ' เพื่อตรวจสอบผลต่างหน้าซ้าย-ขวาและคำนวณมุมเฉลี่ย"
    ],
    stepsEn: [
      "1. Sight Backsight in Face Left, recording horizontal circle.",
      "2. Sight Foresight in Face Left, recording circle.",
      "3. Transmit telescope to Face Right, sighting Foresight.",
      "4. Sight Backsight in Face Right.",
      "5. Tap 'Calculate' to check face differences and resolve mean angle."
    ],
    example: {
      descTh: "BS/L=0°00'00\", FS/L=85°30'40\", BS/R=180°00'20\", FS/R=265°31'10\" -> มุมเฉลี่ย 85° 30' 45.00\"",
      descEn: "BS/L=0°00'00\", FS/L=85°30'40\", BS/R=180°00'20\", FS/R=265°31'10\" -> Mean Angle 85° 30' 45.00\""
    },
    tipsTh: "ผลต่างระหว่างมุมหน้าซ้ายและหน้าขวาต้องไม่เกิน 10-20 ฟิลิปดา หากเกินควรทำการรังวัดชุดนั้นซ้ำ",
    tipsEn: "Face difference should remain within 10-20 arcseconds per traverse specifications.",
    highlightsTh: [
      "สมุดสนามดิจิทัลบันทึกการอ่านจานองศาหน้าซ้าย-หน้าขวา (Face L/R) แทนสมุดจดกระดาษที่เสี่ยงชำรุดหรือสูญหาย",
      "หักล้างความคลาดเคลื่อน Collimation Error และ Trunnion Tilt อัตโนมัติ พร้อมตรวจเช็คผลต่างหน้ากล้อง (<= 20\") ทันที",
      "คำนวณมุมเฉลี่ยประจำชุดอย่างแม่นยำ พร้อมระบบจัดการข้ามเส้นรอบวง 0°/360° (Wrap-around Angle Handling)",
      "ส่งออกใบบันทึกการรังวัดวงรอบมาตรฐาน 8 คอลัมน์เป็น PDF พร้อมลายเซ็นผู้ควบคุมงาน แนบส่งราชการได้ทันที"
    ],
    highlightsEn: [
      "Electronic field book for 2-face (Face Left / Face Right) angle observations, replacing fragile paper notebooks",
      "Automatically cancels collimation error and trunnion tilt while evaluating face difference tolerances (<= 20\") on-site",
      "Computes true mean set angles with seamless 0°/360° circle wrap-around handling preventing angular subtraction errors",
      "Exports official standard 8-column geodetic traverse observation sheets to PDF with supervisor sign-off blocks"
    ],
    calculate: (inputs) => {
      let oL = ((inputs.fsL || 0) - (inputs.bsL || 0) + 360) % 360;
      let oR = ((inputs.fsR || 0) - (inputs.bsR || 0) + 360) % 360;
      // Handle 0°/360° circle wrap-around for circular angular difference and mean
      let dAng = ((oR - oL + 540) % 360) - 180;
      let mean = (oL + dAng / 2 + 360) % 360;
      const diffSec = Math.abs(dAng) * 3600;
      const toDMS = (degDec) => {
        degDec = ((degDec % 360) + 360) % 360;
        let totalSec = Math.round(degDec * 36000) / 10;
        if (totalSec >= 360 * 3600) totalSec -= 360 * 3600;
        const d = Math.floor(totalSec / 3600);
        const remSec = totalSec % 3600;
        const m = Math.floor(remSec / 60);
        const s = (remSec % 60).toFixed(1);
        return `${d}° ${m.toString().padStart(2, '0')}' ${s.padStart(4, '0')}"`;
      };
      return {
        angL: toDMS(oL),
        angR: toDMS(oR),
        meanAng: toDMS(mean),
        diffLR: diffSec.toFixed(1) + ' "' + (diffSec <= 20 ? " (PASS)" : " (WARNING > 20\")")
      };
    }
  },

  {
    id: "resection-2pt",
    num: 10,
    nameTh: "รีเช็คชั่น",
    nameEn: "2-Point Resection",
    subtitleTh: "หาจุดตั้งกล้อง",
    subtitleEn: "Free Stationing (Trilateration)",
    category: "geodesy",
    isPro: false,
    icon: "fa-solid fa-satellite-dish",
    summaryTh: "หาพิกัดจุดตั้งกล้องอิสระจากการวัดระยะทางไปยังหมุดควบคุม 2 จุด ด้วยทฤษฎีกฎของโคไซน์ พร้อมตรวจสอบความถูกต้อง",
    summaryEn: "Calculates free station instrument coordinates by distance resection (trilateration) to two known control monuments.",
    keywords: ["resection", "free station", "รีเช็คชั่น", "จุดตั้งกล้อง", "ไตรเลเทอเรชัน", "trilateration", "cosine law"],
    overviewTh: "การหาพิกัดจุดตั้งกล้องอิสระ (Free Station) โดยวัดระยะทางไปยังหมุดควบคุมที่ทราบพิกัด 2 จุดโดยไม่ต้องส่องมุม ช่วยให้ตั้งกล้องในตำแหน่งที่มองเห็นหน้างานได้กว้างไกลที่สุด หลบเลี่ยงสิ่งกีดขวาง ใช้ทฤษฎีกฎของโคไซน์ในการแก้สามเหลี่ยมเพื่อหาพิกัดของกล้องอย่างแม่นยำ",
    overviewEn: "Free stationing allows setting up an instrument where sightlines are unobstructed without occupying control marks. By measuring EDM distances to two known control points, the law of cosines solves the triangle yielding true instrument coordinates.",
    standardTh: "มาตรฐานงานรังวัดสามเหลี่ยมและจุดตั้งกล้องอิสระ (Trilateration Free Station)",
    standardEn: "Trilateration & Resection Geodetic Standards",
    inputs: [
      { id: "p1N", labelTh: "หมุดที่ 1 N", labelEn: "Point 1 Northing (N)", unit: "m", type: "number", default: 1000.000, step: 0.001 },
      { id: "p1E", labelTh: "หมุดที่ 1 E", labelEn: "Point 1 Easting (E)", unit: "m", type: "number", default: 1000.000, step: 0.001 },
      { id: "d1", labelTh: "ระยะวัดถึงหมุด 1 (d1)", labelEn: "Distance to P1 (d1)", unit: "m", type: "number", default: 100.000, step: 0.001 },
      { id: "p2N", labelTh: "หมุดที่ 2 N", labelEn: "Point 2 Northing (N)", unit: "m", type: "number", default: 1000.000, step: 0.001 },
      { id: "p2E", labelTh: "หมุดที่ 2 E", labelEn: "Point 2 Easting (E)", unit: "m", type: "number", default: 1141.421, step: 0.001 },
      { id: "d2", labelTh: "ระยะวัดถึงหมุด 2 (d2)", labelEn: "Distance to P2 (d2)", unit: "m", type: "number", default: 100.000, step: 0.001 }
    ],
    outputs: [
      { id: "staN", labelTh: "พิกัดกล้อง N (คำตอบหลัก - ด้านขวา)", labelEn: "Station Northing (N) - Sol 1 (Right)", unit: "m" },
      { id: "staE", labelTh: "พิกัดกล้อง E (คำตอบหลัก - ด้านขวา)", labelEn: "Station Easting (E) - Sol 1 (Right)", unit: "m" },
      { id: "altN", labelTh: "พิกัดกล้อง N (คำตอบที่ 2 - ด้านซ้าย)", labelEn: "Station Northing (N) - Sol 2 (Left)", unit: "m" },
      { id: "altE", labelTh: "พิกัดกล้อง E (คำตอบที่ 2 - ด้านซ้าย)", labelEn: "Station Easting (E) - Sol 2 (Left)", unit: "m" },
      { id: "baseDist", labelTh: "ระยะห่างระหว่างหมุด (P1-P2)", labelEn: "Baseline Distance (P1-P2)", unit: "m" },
      { id: "incAngle", labelTh: "มุมตัดกันที่จุดตั้งกล้อง", labelEn: "Included Angle at Station", unit: "deg" }
    ],
    formulas: {
      latex: "D_{12} = \\sqrt{(E_2 - E_1)^2 + (N_2 - N_1)^2} \\\\[6pt] \\cos(\\alpha_1) = \\frac{d_1^2 + D_{12}^2 - d_2^2}{2 \\cdot d_1 \\cdot D_{12}} \\\\[6pt] \\text{Azi}_{\\text{sta,1}} = \\text{Azi}_{12} + \\alpha_1 \\quad (\\text{Right/South}), \\quad \\text{Azi}_{\\text{sta,2}} = \\text{Azi}_{12} - \\alpha_1 \\quad (\\text{Left/North}) \\\\[6pt] N_{\\text{sta}} = N_1 + d_1 \\cos(\\text{Azi}_{\\text{sta}}), \\quad E_{\\text{sta}} = E_1 + d_1 \\sin(\\text{Azi}_{\\text{sta}})",
      plain: "Dist12 = hypot(N2 - N1, E2 - E1)\ncos(alpha1) = (d1² + Dist12² - d2²) / (2 * d1 * Dist12)\nคำตอบที่ 1 (ขวาเส้นฐาน P1->P2): Azi_sta1 = Azi12 + alpha1\nคำตอบที่ 2 (ซ้ายเส้นฐาน P1->P2): Azi_sta2 = Azi12 - alpha1\nN_sta = N1 + d1*cos(Azi), E_sta = E1 + d1*sin(Azi)"
    },
    stepsTh: [
      "1. ตั้งกล้องในจุดเปิดโล่งที่สามารถมองเห็นหมุดควบคุมทั้ง 2 จุด",
      "2. ยิงวัดระยะทางราบไปยังหมุดที่ 1 (d1) และหมุดที่ 2 (d2)",
      "3. ป้อนพิกัดของหมุดที่ 1 และ 2 พร้อมระยะ d1 และ d2",
      "4. กด 'คำนวณ' ระบบจะตรวจสอบความถูกต้องของรูปสามเหลี่ยมและแสดงพิกัดจุดตั้งกล้อง"
    ],
    stepsEn: [
      "1. Set instrument at clear location visible to both control marks.",
      "2. Measure horizontal distances d1 and d2 to Point 1 and Point 2.",
      "3. Enter known coordinates and measured distances.",
      "4. Tap 'Calculate' to verify triangle geometry and output free station coordinates."
    ],
    example: {
      descTh: "P1 (1000, 1000) d1=100m, P2 (1000, 1141.421) d2=100m -> คำตอบหลัก N=929.289, E=1070.711 (มุมตัด 90°); คำตอบสมมาตร N=1070.711, E=1070.711",
      descEn: "P1 (1000, 1000) d1=100m, P2 (1000, 1141.421) d2=100m -> Primary Station N=929.289, E=1070.711 (90° subtended angle); Alt N=1070.711, E=1070.711"
    },
    tipsTh: "หลีกเลี่ยงการตั้งกล้องที่ทำให้มุมตัดระหว่างหมุดทั้งสองแคบเกินไป (ควรอยู่ระหว่าง 30° ถึง 150°) เพื่อความแม่นยำสูงสุด",
    tipsEn: "Avoid subtended angles under 30° or over 150° (geometry error); 60°-120° provides ideal precision.",
    highlightsTh: [
      "หาพิกัดจุดตั้งกล้องอิสระ (Free Station) ได้ทันที เพียงยิงวัดระยะทางไปยังหมุดควบคุม 2 จุดโดยไม่ต้องเปิดวัดมุม",
      "คำนวณด้วยทฤษฎีกฎของโคไซน์ (Law of Cosines) ให้คำตอบทั้ง 2 ด้าน (ซ้าย/ขวาของเส้นฐาน) แก้ปัญหาความกำกวมของจุดตัด",
      "แสดงมุมตัดกันของแนวเล็งที่จุดตั้งกล้อง พร้อมประเมินความแข็งแรงทางเรขาคณิต (Geometric Strength) ทันที",
      "ตั้งกล้องได้ทุกจุดที่มองเห็นหมุดควบคุม หลบเลี่ยงสิ่งกีดขวางและพื้นที่การจราจรหนาแน่นในไซต์งานได้อย่างอิสระ"
    ],
    highlightsEn: [
      "Rapid free stationing calculating instrument setup coordinates using EDM distances to two known control marks without turned angles",
      "Powered by the Law of Cosines, resolving both bilateral solutions (left and right of baseline) to overcome intersection ambiguity",
      "Displays subtended included angle at the instrument station with instant geometric strength quality grading",
      "Enables instrument setup anywhere with clear sightlines, bypassing sightline obstructions and high-traffic construction zones"
    ],
    calculate: (inputs) => {
      const n1 = inputs.p1N || 0;
      const e1 = inputs.p1E || 0;
      const n2 = inputs.p2N || 0;
      const e2 = inputs.p2E || 0;
      const d1 = inputs.d1 || 0;
      const d2 = inputs.d2 || 0;
      const d12 = Math.hypot(n2 - n1, e2 - e1);
      if (d1 + d2 <= d12 || Math.abs(d1 - d2) >= d12 || d12 === 0) {
        return {
          staN: "ข้อผิดพลาด",
          staE: "ข้อผิดพลาด",
          altN: "ข้อผิดพลาด",
          altE: "ข้อผิดพลาด",
          baseDist: d12.toFixed(3) + " m",
          incAngle: "รูปสามเหลี่ยมไม่บรรจบ (d1 + d2 <= ระยะห่างหมุด)"
        };
      }
      const cosA1 = (d1 * d1 + d12 * d12 - d2 * d2) / (2 * d1 * d12);
      const angle1 = Math.acos(Math.max(-1, Math.min(1, cosA1)));
      let az12 = Math.atan2(e2 - e1, n2 - n1);
      if (az12 < 0) az12 += 2 * Math.PI;

      // Primary solution: az12 + angle1 (Right side of baseline P1->P2, matching standard setup & documented example)
      const azSta1 = az12 + angle1;
      const staN1 = n1 + d1 * Math.cos(azSta1);
      const staE1 = e1 + d1 * Math.sin(azSta1);

      // Alternative bilateral solution: az12 - angle1 (Left side of baseline P1->P2)
      const azSta2 = az12 - angle1;
      const staN2 = n1 + d1 * Math.cos(azSta2);
      const staE2 = e1 + d1 * Math.sin(azSta2);

      const cosInc = (d1 * d1 + d2 * d2 - d12 * d12) / (2 * d1 * d2);
      const incDeg = (Math.acos(Math.max(-1, Math.min(1, cosInc))) * 180 / Math.PI).toFixed(2);
      return {
        staN: staN1.toFixed(3) + " m",
        staE: staE1.toFixed(3) + " m",
        altN: staN2.toFixed(3) + " m",
        altE: staE2.toFixed(3) + " m",
        baseDist: d12.toFixed(3) + " m",
        incAngle: incDeg + "° (มุมตัดเรขาคณิต)"
      };
    }
  },

  {
    id: "geoutm-converter",
    num: 11,
    nameTh: "แปลงพิกัด",
    nameEn: "GeoUTM Converter",
    subtitleTh: "Lat/Long <-> UTM",
    subtitleEn: "WGS84 Geodetic Transformation",
    category: "geodesy",
    isPro: true,
    icon: "fa-solid fa-earth-americas",
    summaryTh: "แปลงค่าพิกัดสองทิศทางระหว่าง WGS84 Lat/Long กับ UTM กริดแผนที่ พร้อมอนุมานซีกโลกอัตโนมัติ",
    summaryEn: "Bidirectional WGS84 Geographic to UTM Grid converter powered by Redfearn series with auto-hemisphere detection.",
    keywords: ["geoutm", "แปลงพิกัด", "lat", "long", "utm", "wgs84", "zone 47", "zone 48", "redfearn", "geodetic"],
    overviewTh: "การแปลงค่าพิกัดระหว่างพิกัดภูมิศาสตร์ (WGS84 Latitude / Longitude) กับพิกัดกริดแผนที่ Universal Transverse Mercator (UTM Zone 47N และ 48N สำหรับประเทศไทย) คำนวณด้วยอนุกรม Redfearn Series ขยายกำลัง 6 รองรับความแม่นยำระดับต่ำกว่ามิลลิเมตร",
    overviewEn: "Bidirectional coordinate transformation between WGS84 ellipsoidal Lat/Long and UTM grid projections (Zone 47N and 48N covering Thailand). Incorporates Redfearn's 6th-order series for sub-millimeter closure.",
    standardTh: "มาตรฐานการทำแผนที่ กรมแผนที่ทหาร (RTSD UTM WGS84 Transformation)",
    standardEn: "WGS84 Ellipsoid & UTM Projection Standards",
    inputs: [
      { id: "lat", labelTh: "ละติจูด (Latitude N)", labelEn: "Latitude (Deg N)", unit: "deg", type: "number", default: 13.756331, step: 0.000001 },
      { id: "lon", labelTh: "ลองจิจูด (Longitude E)", labelEn: "Longitude (Deg E)", unit: "deg", type: "number", default: 100.501765, step: 0.000001 }
    ],
    outputs: [
      { id: "utmZone", labelTh: "โซน UTM", labelEn: "UTM Zone & Hemisphere", unit: "" },
      { id: "utmE", labelTh: "พิกัด Easting (E)", labelEn: "UTM Easting (E)", unit: "m" },
      { id: "utmN", labelTh: "พิกัด Northing (N)", labelEn: "UTM Northing (N)", unit: "m" },
      { id: "gridConv", labelTh: "มุมเบี่ยงเบนกริด (Convergence)", labelEn: "Grid Convergence", unit: "deg" }
    ],
    formulas: {
      latex: "x = k_0 N_v \\left[ A + (1 - T + C)\\frac{A^3}{6} + \\dots \\right] + 500000 \\\\[6pt] y = k_0 \\left[ M + N_v \\tan(\\phi) \\left( \\frac{A^2}{2} + \\dots \\right) \\right]",
      plain: "สมการการแปลงพิกัด Redfearn Series ขยายบนทรงรี WGS84\na = 6378137.0 m, 1/f = 298.257223563, k0 = 0.9996, False Easting = 500,000 m"
    },
    stepsTh: [
      "1. ป้อนค่า Latitude และ Longitude เป็นทศนิยมองศา",
      "2. กด 'คำนวณ' ระบบจะคำนวณหมายเลขโซน UTM อัตโนมัติ (เช่น 47N)",
      "3. รับค่าพิกัด Easting และ Northing พร้อมมุม Grid Convergence",
      "4. สามารถสลับโหมดเพื่อแปลงกลับจาก UTM เป็น Lat/Long ได้"
    ],
    stepsEn: [
      "1. Enter decimal Latitude and Longitude.",
      "2. Tap 'Calculate' to auto-detect UTM zone (e.g. 47N).",
      "3. Retrieve Easting, Northing, and Grid Convergence.",
      "4. Toggle mode to perform inverse UTM to Lat/Long conversion."
    ],
    example: {
      descTh: "เสาชิงช้า กรุงเทพฯ: Lat 13.756331° N, Lon 100.501765° E -> Zone 47N, E=662,398.243 m, N=1,521,498.812 m",
      descEn: "Giant Swing Bangkok: Lat 13.756331° N, Lon 100.501765° E -> Zone 47N, E=662,398.243 m, N=1,521,498.812 m"
    },
    tipsTh: "ประเทศไทยครอบคลุม UTM 2 โซน: โซน 47 (ภาคเหนือ ภาคกลาง ภาคใต้) และโซน 48 (ภาคตะวันออกเฉียงเหนือและภาคตะวันออกบางส่วน)",
    tipsEn: "Thailand spans UTM Zone 47 (North, Central, South) and Zone 48 (Northeast and East).",
    highlightsTh: [
      "แปลงพิกัดสองทิศทางระหว่าง WGS84 Geographic (Lat/Long ทั้งแบบ DMS และทศนิยม) กับ UTM Grid (Northing/Easting)",
      "ขับเคลื่อนด้วยอนุกรม Redfearn Series ขยายกำลัง 6 บนทรงรี WGS84 ให้ความแม่นยำสูงระดับต่ำกว่ามิลลิเมตร",
      "ตรวจจับโซน UTM อัตโนมัติ (ครอบคลุมทั้ง Zone 47N และ 48N ทั่วประเทศไทย) พร้อมคำนวณมุม Grid Convergence",
      "มีแผนที่ OpenStreetMap แบบโต้ตอบในตัว ปักหมุด ดูพิกัดบนแผนที่ดาวเทียม และส่งออกรายงานพิกัดทางวิศวกรรม"
    ],
    highlightsEn: [
      "Rigorous bidirectional coordinate transformation between WGS84 Geographic (Lat/Lon in DMS/Decimal) and UTM Grid (N/E)",
      "Engineered with Redfearn 6th-order series expansion on the WGS84 ellipsoid guaranteeing sub-millimeter mathematical closure",
      "Auto-detects UTM zone (Zone 47N and 48N covering Thailand) and calculates true meridian grid convergence angles",
      "Embedded interactive OpenStreetMap with satellite view, one-tap marker pin-drop, and formal geodetic PDF export"
    ],
    calculate: (inputs) => {
      const lat = inputs.lat || 13.756331;
      const lon = inputs.lon || 100.501765;
      const a = 6378137.0;
      const f = 1 / 298.257223563;
      const k0 = 0.9996;
      const e2 = 2 * f - f * f;
      const ePrime2 = e2 / (1 - e2);
      const zone = Math.floor((lon + 180) / 6) + 1;
      const lon0 = ((zone - 1) * 6 - 180 + 3) * Math.PI / 180;
      const phi = lat * Math.PI / 180;
      const lambda = lon * Math.PI / 180;
      const Nv = a / Math.sqrt(1 - e2 * Math.sin(phi) * Math.sin(phi));
      const T = Math.tan(phi) * Math.tan(phi);
      const C = ePrime2 * Math.cos(phi) * Math.cos(phi);
      const A = Math.cos(phi) * (lambda - lon0);
      const M = a * ((1 - e2 / 4 - 3 * e2 * e2 / 64 - 5 * Math.pow(e2, 3) / 256) * phi
        - (3 * e2 / 8 + 3 * e2 * e2 / 32 + 45 * Math.pow(e2, 3) / 1024) * Math.sin(2 * phi)
        + (15 * e2 * e2 / 256 + 45 * Math.pow(e2, 3) / 1024) * Math.sin(4 * phi)
        - (35 * Math.pow(e2, 3) / 3072) * Math.sin(6 * phi));
      const easting = 500000 + k0 * Nv * (A + (1 - T + C) * Math.pow(A, 3) / 6 + (5 - 18 * T + T * T + 72 * C - 58 * ePrime2) * Math.pow(A, 5) / 120);
      const northing = k0 * (M + Nv * Math.tan(phi) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * Math.pow(A, 4) / 24 + (61 - 58 * T + T * T + 600 * C - 330 * ePrime2) * Math.pow(A, 6) / 720));
      const conv = (Math.sin(phi) * (lambda - lon0) * 180 / Math.PI).toFixed(4);
      return {
        utmZone: `${zone}N (WGS84)`,
        utmE: easting.toFixed(3) + " m",
        utmN: northing.toFixed(3) + " m",
        gridConv: conv + "°"
      };
    }
  },

  {
    id: "gnss-plan",
    num: 12,
    nameTh: "วางแผนโครงข่าย",
    nameEn: "GNSS Network Plan",
    subtitleTh: "รังวัดด้วยดาวเทียม",
    subtitleEn: "Static Network Planner",
    category: "geodesy",
    isPro: true,
    icon: "fa-solid fa-network-wired",
    summaryTh: "ออกแบบตารางรอบรังวัดดาวเทียม GNSS กำหนด Base/Rover คำนวณเวกเตอร์อิสระ IBL และนับรอบการตั้งกล้องซ้ำ",
    summaryEn: "Designs static GNSS survey sessions, assigns Base/Rovers, and computes independent baseline vectors (IBL = N - 1).",
    keywords: ["gnss", "gps", "static", "ดาวเทียม", "โครงข่าย", "ibl", "base", "rover", "session", "รังวัด"],
    overviewTh: "การรังวัดโครงข่ายหมุดควบคุมด้วยดาวเทียม GNSS สถิต (Static Survey) ต้องมีการวางแผนรอบรังวัด (Observation Sessions) ให้เป็นไปตามกฎเวกเตอร์อิสระ (Independent Baseline: IBL = N - 1) และตรวจสอบว่าหมุดทุกต้นได้รับการส่องซ้ำอย่างน้อย 2 รอบเวลาที่ต่างกัน (Repeat Occupations >= 2) เพื่อรับประกันความแม่นยำทางยีโอเดซี",
    overviewEn: "Planning static geodetic GNSS campaigns requires strict session design adhering to the independent baseline rule (IBL = N - 1) and ensuring all control monuments receive at least 2 independent occupations at differing satellite geometries.",
    standardTh: "มาตรฐานงานรังวัดดาวเทียม กรมแผนที่ทหาร (Static GNSS Control Standards)",
    standardEn: "Federal Geodetic Control Subcommittee (FGCS) GNSS Guidelines",
    inputs: [
      { id: "numPoints", labelTh: "จำนวนหมุดในโครงข่าย", labelEn: "Total Network Points", unit: "points", type: "number", default: 6, min: 3, max: 50, step: 1 },
      { id: "numReceivers", labelTh: "จำนวนเครื่องรับสัญญาณ", labelEn: "Available GNSS Receivers", unit: "units", type: "number", default: 4, min: 2, max: 20, step: 1 },
      { id: "sessDuration", labelTh: "เวลาต่อรอบรังวัด (นาที)", labelEn: "Session Duration (Minutes)", unit: "min", type: "number", default: 60, step: 15 }
    ],
    outputs: [
      { id: "minSessions", labelTh: "จำนวนรอบรังวัดขั้นต่ำ", labelEn: "Minimum Sessions Required", unit: "sessions" },
      { id: "iblPerSession", labelTh: "เวกเตอร์อิสระต่อรอบ (IBL)", labelEn: "Independent Baselines (IBL)", unit: "vectors" },
      { id: "totalBaselines", labelTh: "เวกเตอร์อิสระรวมทั้งโครงการ", labelEn: "Total Independent Baselines", unit: "vectors" },
      { id: "totalTime", labelTh: "เวลาปฏิบัติการรวมโดยประมาณ", labelEn: "Estimated Campaign Time", unit: "hours" }
    ],
    formulas: {
      latex: "\\text{IBL} = N_{\\text{receivers}} - 1 \\\\[6pt] \\text{Min Sessions} = \\left\\lceil \\frac{N_{\\text{points}} \\times 2}{N_{\\text{receivers}}} \\right\\rceil \\\\[6pt] \\text{Total Baselines} = \\text{Min Sessions} \\times \\text{IBL}",
      plain: "IBL = Receivers - 1\nMin Sessions = ceil((Points * 2) / Receivers)\nTotal Baselines = Min Sessions * IBL"
    },
    stepsTh: [
      "1. ป้อนจำนวนหมุดทั้งหมดที่ต้องรังวัดในโครงข่าย",
      "2. ระบุจำนวนเครื่องรับสัญญาณ GNSS ที่มีพร้อมใช้งาน",
      "3. กำหนดระยะเวลาการดักฟังสัญญาณดาวเทียมต่อรอบ (เช่น 60 นาที)",
      "4. กด 'คำนวณ' เพื่อรับตารางจำนวนรอบรังวัดและจำนวนเวกเตอร์อิสระ",
      "5. ส่งออกแผนงานการย้ายเครื่องรับให้ทีมสำรวจ"
    ],
    stepsEn: [
      "1. Enter total network monument count.",
      "2. Enter available GNSS receiver hardware count.",
      "3. Specify observation session window length (e.g. 60 min).",
      "4. Tap 'Calculate' to evaluate minimum sessions and independent baseline count.",
      "5. Export receiver hopping schedule for field teams."
    ],
    example: {
      descTh: "หมุด 6 จุด, เครื่องรับ 4 เครื่อง, รอบละ 60 นาที -> 3 รอบรังวัด, 9 เวกเตอร์อิสระ, ทุกหมุดส่องซ้ำ >= 2 ครั้ง",
      descEn: "6 monuments, 4 receivers, 60 min per session -> 3 sessions, 9 IBL vectors, repeat occupations >= 2"
    },
    tipsTh: "หมุดควบคุมต้องมีเวกเตอร์อิสระเชื่อมโยงอย่างน้อย 3 ทิศทางเพื่อสร้างรูปสามเหลี่ยมปิด (Closed Loop Verification)",
    tipsEn: "Ensure every monument is tied into at least two independent closed geometric loops.",
    highlightsTh: [
      "ออกแบบตารางรอบรังวัดโครงข่ายดาวเทียม GNSS สถิต (Static GNSS Campaign) สำหรับงานควบคุมระดับสูง",
      "คำนวณจำนวนเวกเตอร์อิสระตามกฎ IBL = N - 1 และวางแผนการส่องซ้ำ (Repeat Occupations >= 2) ตามเกณฑ์ยีโอเดซี",
      "ตารางจัดสรรเครื่องรับสัญญาณ Base/Rover รายรอบรังวัด ช่วยลดเวลาเคลื่อนย้ายทีมงานและประหยัดแบตเตอรี่หน้างาน",
      "แผนที่แสดงผังร่างโครงข่ายเวกเตอร์รูปปิด (Closed Loops) พร้อมส่งออกแผนปฏิบัติการรังวัดเป็น PDF"
    ],
    highlightsEn: [
      "Static GNSS campaign schedule planner for high-order geodetic control networks and multi-station surveys",
      "Computes independent baselines adhering to IBL = N - 1 rules and verifies repeat occupation constraints (>= 2 sessions)",
      "Base and Rover receiver hopping matrix optimizing crew deployment, transit times, and battery consumption",
      "Interactive baseline mesh network map rendering closed geometric loops with one-click PDF field operation schedule export"
    ],
    calculate: (inputs) => {
      const pts = inputs.numPoints || 6;
      const rec = inputs.numReceivers || 4;
      const dur = inputs.sessDuration || 60;
      const ibl = Math.max(1, rec - 1);
      const minSess = Math.ceil((pts * 2) / rec);
      const totBaselines = minSess * ibl;
      const totalHours = ((minSess * dur + (minSess - 1) * 20) / 60).toFixed(1);
      return {
        minSessions: `${minSess} รอบ (ส่องซ้ำ >= 2 ครั้งทุกหมุด)`,
        iblPerSession: `${ibl} เวกเตอร์/รอบ`,
        totalBaselines: `${totBaselines} เวกเตอร์อิสระ`,
        totalTime: `${totalHours} ชั่วโมง (รวมเวลาย้ายเครื่อง 20 นาที/รอบ)`
      };
    }
  },

  {
    id: "marker-finder",
    num: 13,
    nameTh: "ค้นหา",
    nameEn: "Survey Finder",
    subtitleTh: "หมุดสำรวจ",
    subtitleEn: "HUD Marker Recovery",
    category: "field_util",
    isPro: false,
    icon: "fa-solid fa-location-crosshairs",
    summaryTh: "นำทางค้นหาหมุดควบคุมเดิมด้วยเข็มทิศ HUD ลูกศรชี้พิกัด และเสียงบี๊บเตือนความถี่สูงเมื่อเดินเข้าใกล้หมุด",
    summaryEn: "HUD compass and acoustic proximity navigation tool to recover overgrown, buried, or obscured control monuments.",
    keywords: ["finder", "marker", "หมุด", "ค้นหา", "เข็มทิศ", "hud", "recovery", "gps", "proximity"],
    overviewTh: "ช่วยช่างสำรวจในการค้นหาหมุดควบคุมเดิม หมุดหลักเขตที่ดิน หรือหลุมเจาะดินที่ถูกหญ้าหรือดินกลบฝัง โดยระบบจะเปรียบเทียบพิกัดปัจจุบันจาก GNSS กับพิกัดเป้าหมาย แสดงลูกศรนำทางบนเข็มทิศดิจิทัล พร้อมระบบเสียงบี๊บเตือนความถี่สูงที่จะดังถี่ขึ้นเรื่อยๆ เมื่อเดินเข้าใกล้หมุดในระยะ 30 เมตร",
    overviewEn: "Assists survey crews in recovering buried, overgrown, or obscured boundary monuments. It compares real-time GNSS fixes to target coordinates, rendering a HUD direction needle and acoustic beeping that accelerates within 30 meters.",
    standardTh: "มาตรฐานงานค้นหาหลักเขตที่ดินและหมุดควบคุม (Cadastral Monument Recovery)",
    standardEn: "Land Survey Monument Recovery & Recovery HUD Guidelines",
    inputs: [
      { id: "curN", labelTh: "พิกัดปัจจุบัน N (Current N)", labelEn: "Current Northing (N)", unit: "m", type: "number", default: 1000.000, step: 0.001 },
      { id: "curE", labelTh: "พิกัดปัจจุบัน E (Current E)", labelEn: "Current Easting (E)", unit: "m", type: "number", default: 500.000, step: 0.001 },
      { id: "tarN", labelTh: "พิกัดเป้าหมาย N (Target N)", labelEn: "Target Northing (N)", unit: "m", type: "number", default: 1015.000, step: 0.001 },
      { id: "tarE", labelTh: "พิกัดเป้าหมาย E (Target E)", labelEn: "Target Easting (E)", unit: "m", type: "number", default: 520.000, step: 0.001 }
    ],
    outputs: [
      { id: "distToTar", labelTh: "ระยะห่างตรงถึงหมุด", labelEn: "Straight Line Distance", unit: "m" },
      { id: "bearingToTar", labelTh: "ทิศทางที่ต้องเดินไป (Azimuth)", labelEn: "Target Bearing (Azimuth)", unit: "DMS" },
      { id: "proximityState", labelTh: "สถานะความใกล้เป้าหมาย", labelEn: "Proximity Audio Rate", unit: "" }
    ],
    formulas: {
      latex: "D = \\sqrt{(N_{\\text{tar}} - N_{\\text{cur}})^2 + (E_{\\text{tar}} - E_{\\text{cur}})^2} \\\\[6pt] \\text{Bearing} = \\operatorname{atan2}(E_{\\text{tar}} - E_{\\text{cur}}, N_{\\text{tar}} - N_{\\text{cur}}) \\\\[6pt] \\text{Beep Interval (ms)} = \\max(100, \\min(1500, D \\times 50))",
      plain: "Dist = hypot(N_tar - N_cur, E_tar - E_cur)\nBearing = atan2(E_tar - E_cur, N_tar - N_cur)\nเสียงบี๊บถี่ขึ้นจาก 1500 ms ลงเหลือ 100 ms ในระยะ 30 เมตร"
    },
    stepsTh: [
      "1. กรอกพิกัดของหมุดเป้าหมายที่ต้องการค้นหา (รองรับทั้ง UTM และ Lat/Long)",
      "2. เดินถือสมาร์ทโฟนในแนวระนาบ ระบบจะอ่านพิกัดปัจจุบันและคำนวณระยะห่าง",
      "3. เดินตามทิศทางของลูกศรบนเข็มทิศ HUD",
      "4. เมื่อเข้าใกล้ในระยะ 30 ม. สังเกตเสียงบี๊บเตือนที่จะดังถี่ขึ้นเรื่อยๆ จนถึงเป้าหมาย"
    ],
    stepsEn: [
      "1. Input target monument coordinates (UTM or Lat/Lon).",
      "2. Walk holding device flat; live GNSS tracks current distance.",
      "3. Follow the HUD directional arrow.",
      "4. Acoustic beeping accelerates within 30 meters guiding your final recovery."
    ],
    example: {
      descTh: "ปัจจุบัน (1000, 500) ไปยังเป้าหมาย (1015, 520): ระยะ 25.000 ม., ทิศทาง 53° 07' 48\", อยู่ในระยะเสียงเตือน",
      descEn: "Current (1000, 500) to Target (1015, 520): Distance 25.000m, Bearing 53° 07' 48\", Within proximity range"
    },
    tipsTh: "เมื่อเข้าใกล้ระยะ 5-10 เมตร ให้เปิดโหมดเสียงเตือนสูงสุดและใช้เหล็กแทงตรวจหาหมุดคอนกรีตใต้ผิวดิน",
    tipsEn: "Within 5-10 meters, listen for rapid audio pulses and probe soil with a sounding rod.",
    highlightsTh: [
      "ระบบเข็มทิศ HUD นำทางค้นหาหมุดควบคุมเดิม หมุดหลักเขตที่ดิน หรือหมุดที่ถูกดินและหญ้ากลบฝัง",
      "รองรับพิกัดทั้ง UTM WGS84 และ Lat/Long แสดงระยะทางตรงและทิศทาง Azimuth สู่เป้าหมายแบบเรียลไทม์",
      "ระบบเสียงบี๊บเตือนความถี่สูงและการสั่นที่จะดังถี่ขึ้นเรื่อยๆ เมื่อเดินเข้าใกล้หมุดในระยะ 30 เมตร",
      "แผนที่ดาวเทียมไฮบริดพร้อมตำแหน่ง GPS ปัจจุบันและลูกศรชี้ทิศทาง ช่วยค้นหาหมุดได้แม้ในป่ารกชัฏ"
    ],
    highlightsEn: [
      "HUD compass navigation guiding surveyors directly to buried, overgrown, or obscured boundary monuments",
      "Supports both UTM WGS84 Grid (N/E) and Lat/Lon formats, tracking straight-line distance and azimuth in real time",
      "Acoustic proximity beeper and haptic pulses accelerating as you close within 30 meters of the target monument",
      "Hybrid satellite map displaying live GNSS position and heading needle for effortless recovery in rough terrain"
    ],
    calculate: (inputs) => {
      const dN = (inputs.tarN || 0) - (inputs.curN || 0);
      const dE = (inputs.tarE || 0) - (inputs.curE || 0);
      const dist = Math.hypot(dN, dE);
      let az = Math.atan2(dE, dN) * 180 / Math.PI;
      if (az < 0) az += 360;
      const deg = Math.floor(az);
      const minFull = (az - deg) * 60;
      const min = Math.floor(minFull);
      const sec = ((minFull - min) * 60).toFixed(1);
      let prox = "ไกลกว่า 30 ม. (เดินตามทิศลูกศร)";
      if (dist <= 5) prox = "ถึงตำแหน่งหมุดแล้ว! (<= 5 ม. - เสียงบี๊บต่อเนื่อง)";
      else if (dist <= 15) prox = "ใกล้มาก (<= 15 ม. - เสียงบี๊บเร็วสูง)";
      else if (dist <= 30) prox = "เข้าสู่ระยะใกล้ (<= 30 ม. - เสียงบี๊บเริ่มทำงาน)";
      return {
        distToTar: dist.toFixed(3) + " m",
        bearingToTar: `${deg}° ${min.toString().padStart(2, '0')}' ${sec.padStart(4, '0')}"`,
        proximityState: prox
      };
    }
  },

  {
    id: "weekly-plan-1-2",
    num: 14,
    nameTh: "แผนงาน 1+2",
    nameEn: "1+2 Week Programme",
    subtitleTh: "แผนรายสัปดาห์",
    subtitleEn: "Rolling Construction Schedule",
    category: "field_util",
    isPro: false,
    icon: "fa-solid fa-calendar-week",
    summaryTh: "บริหารจัดการงานสำรวจ 3 สัปดาห์ จัดสรรกำลังคน-เครื่องจักร คำนวณน้ำมันดีเซลรายวัน และเว้นวรรควันหยุดอัตโนมัติ",
    summaryEn: "3-week rolling work schedule managing survey tasks, manpower, equipment, and daily fuel consumption.",
    keywords: ["1+2 week", "programme", "gantt", "แผนงาน", "น้ำมัน", "บุคลากร", "rolling plan", "schedule"],
    overviewTh: "ระบบบริหารแผนงานสำรวจแบบหมุนเวียน 3 สัปดาห์ (1 สัปดาห์ปัจจุบัน + 2 สัปดาห์ล่วงหน้า) ตามมาตรฐานผู้รับเหมาก่อสร้างชั้นนำ ช่วยจัดสรรทีมสำรวจ รถสำรวจ น้ำมันดีเซล และอุปกรณ์ ให้สอดคล้องกับแผนงานเทคอนกรีตและงานดิน โดยเว้นวรรควันหยุดโครงการและวันอาทิตย์อัตโนมัติ",
    overviewEn: "3-week rolling project management conforming to major civil contracting standards. Coordinates survey crews, vehicles, daily diesel fuel allowances, and hardware against concrete pours and earthworks, auto-skipping project holidays.",
    standardTh: "มาตรฐานการบริหารโครงการก่อสร้าง (Civil Construction Project Planning)",
    standardEn: "Construction Project Rolling Schedule Methodology",
    inputs: [
      { id: "numTeams", labelTh: "จำนวนทีมสำรวจภาคสนาม", labelEn: "Survey Field Crews", unit: "teams", type: "number", default: 3, min: 1, max: 20, step: 1 },
      { id: "fuelPerTeam", labelTh: "อัตราน้ำมันต่อทีม/วัน", labelEn: "Diesel Rate per Team/Day", unit: "L/day", type: "number", default: 15.0, step: 1.0 },
      { id: "workdays", labelTh: "จำนวนวันทำงานใน 3 สัปดาห์", labelEn: "Working Days (in 21 days)", unit: "days", type: "number", default: 18, min: 1, max: 21, step: 1 }
    ],
    outputs: [
      { id: "dailyFuel", labelTh: "ปริมาณน้ำมันดีเซลรายวัน", labelEn: "Daily Fuel Total", unit: "Liters" },
      { id: "totalFuel", labelTh: "ปริมาณน้ำมันรวม 3 สัปดาห์", labelEn: "Total 3-Week Fuel", unit: "Liters" },
      { id: "totalManDays", labelTh: "ปริมาณแรงงานรวม (Man-Days)", labelEn: "Total Crew-Days", unit: "crew-days" }
    ],
    formulas: {
      latex: "\\text{Daily Fuel} = N_{\\text{teams}} \\times \\text{Rate}_{\\text{fuel}} \\\\[6pt] \\text{Total Fuel} = \\text{Daily Fuel} \\times \\text{Workdays} \\\\[6pt] \\text{Crew-Days} = N_{\\text{teams}} \\times \\text{Workdays}",
      plain: "Daily Fuel = Teams * FuelRate\nTotal Fuel = Daily Fuel * Workdays\nTotal Crew-Days = Teams * Workdays"
    },
    stepsTh: [
      "1. ระบุจำนวนทีมสำรวจภาคสนามที่ต้องกระจายลงไซต์งาน",
      "2. กำหนดโควตาน้ำมันดีเซลต่อคัน/ทีมต่อวัน",
      "3. ระบุวันทำงานจริง (หักวันอาทิตย์และวันหยุดนักขัตฤกษ์)",
      "4. กด 'คำนวณ' เพื่อรับสรุปงบประมาณน้ำมันและปริมาณแรงงานรวม 3 สัปดาห์",
      "5. พิมพ์รายงาน Gantt Chart ส่งผู้จัดการโครงการ"
    ],
    stepsEn: [
      "1. Input number of active field crews.",
      "2. Define daily vehicle diesel rate per team.",
      "3. Specify net working days excluding Sundays and holidays.",
      "4. Tap 'Calculate' to evaluate fuel requirements and total crew-days.",
      "5. Export 3-week rolling Gantt schedule for site management."
    ],
    example: {
      descTh: "3 ทีมสำรวจ, ใช้น้ำมัน 15 ลิตร/ทีม/วัน, ทำงาน 18 วัน -> ใช้น้ำมันวันละ 45 ลิตร, รวม 810 ลิตร (54 crew-days)",
      descEn: "3 crews, 15L/day/crew, 18 workdays -> Daily 45 Liters, Total 810 Liters (54 crew-days)"
    },
    tipsTh: "การวางแผนล่วงหน้า 2 สัปดาห์ช่วยให้จองคิวรถโม่คอนกรีตและขอกำลังพลเสริมได้ทันท่วงที",
    tipsEn: "A 2-week rolling outlook provides adequate lead time for concrete batching bookings.",
    highlightsTh: [
      "บริหารแผนงานสำรวจแบบหมุนเวียน 3 สัปดาห์ (1 สัปดาห์ปัจจุบัน + 2 สัปดาห์ล่วงหน้า) ตามมาตรฐานผู้รับเหมาก่อสร้าง",
      "คำนวณวันทำงานสุทธิ (Net Workdays) โดยเว้นวรรควันอาทิตย์และวันหยุดโครงการอัตโนมัติ",
      "คำนวณอัตราสิ้นเปลืองน้ำมันดีเซลรายวันและปริมาณแรงงานรวม (Crew-Days) ป้องกันงบประมาณบานปลาย",
      "แผนภาพ Gantt Chart แสดงความคืบหน้ารายสัปดาห์ พร้อมส่งออกรายงานกำหนดการสำหรับที่ประชุมไซต์"
    ],
    highlightsEn: [
      "3-week rolling lookahead schedule conforming to civil engineering contractor standards",
      "Automated net working-day calculation filtering out Sundays and project calendar holidays",
      "Forecasts daily vehicle diesel consumption and total crew-days preventing project budget overruns",
      "Interactive weekly Gantt chart visualization with executive summary export for site progress meetings"
    ],
    calculate: (inputs) => {
      const teams = inputs.numTeams || 3;
      const rate = inputs.fuelPerTeam || 15;
      const days = inputs.workdays || 18;
      const daily = teams * rate;
      const total = daily * days;
      const manDays = teams * days;
      return {
        dailyFuel: `${daily.toFixed(1)} ลิตร/วัน`,
        totalFuel: `${total.toFixed(0)} ลิตร (สำหรับ 3 สัปดาห์)`,
        totalManDays: `${manDays} ทีม-วัน (Crew-Days)`
      };
    }
  },

  {
    id: "short-elevation",
    num: 15,
    nameTh: "งานระดับ",
    nameEn: "FieldPoint Leveling",
    subtitleTh: "รังวัดหลายจุด",
    subtitleEn: "Multi-Point Elevation & Tolerance Check",
    category: "level",
    isPro: true,
    icon: "fa-solid fa-ruler-vertical",
    summaryTh: "ถ่ายระดับจากหมุด BM ตรวจสอบระดับก่อสร้างจริงเทียบกับค่าออกแบบ พร้อมระบบแจ้งเตือนเมื่อหลุดเกณฑ์ Tolerance",
    summaryEn: "Multi-point leveling from benchmarks with automated tolerance verification and non-conformance alerts.",
    keywords: ["leveling", "elevation", "ระดับ", "bm", "hi", "bs", "fs", "tolerance", "ถ่ายระดับ", "หมุดระดับ"],
    overviewTh: "งานระดับความสูงในการก่อสร้างถนน โครงสร้างอาคาร และงานเทคอนกรีตพื้น ช่างระดับจะอ่านไม้หลัง (BS) บนหมุดอ้างอิง BM เพื่อหาความสูงแนวเล็งกล้อง (HI) จากนั้นส่องอ่านไม้หน้า (IFS/FS) บนจุดก่อสร้างจริง โปรแกรมจะคำนวณระดับความสูง เปรียบเทียบกับค่าออกแบบ และตรวจเช็คค่าความคลาดเคลื่อนระดับมิลลิเมตร",
    overviewEn: "Site elevation grading and slab leveling. The instrument reads backsight (BS) onto a benchmark (BM) establishing height of instrument (HI), then observes intermediate foresights (IFS). Deviations against design elevations are verified to millimeter tolerances.",
    standardTh: "มาตรฐานงานระดับชั้นที่ 3 และ 4 กรมแผนที่ทหาร และ วสท. (Differential Leveling Standards)",
    standardEn: "Differential Leveling Specifications (FGCC 3rd/4th Order)",
    inputs: [
      { id: "bmElev", labelTh: "ระดับหมุดอ้างอิง BM (m)", labelEn: "Benchmark Elevation (m)", unit: "m", type: "number", default: 50.000, step: 0.001 },
      { id: "bsReading", labelTh: "ค่าอ่านไม้หลัง BS (m)", labelEn: "Backsight Reading (BS)", unit: "m", type: "number", default: 1.450, step: 0.001 },
      { id: "desElev", labelTh: "ระดับออกแบบที่ต้องการ (m)", labelEn: "Design Elevation (m)", unit: "m", type: "number", default: 49.850, step: 0.001 },
      { id: "fsReading", labelTh: "ค่าอ่านไม้หน้าจริง FS (m)", labelEn: "Actual Staff Reading (FS)", unit: "m", type: "number", default: 1.595, step: 0.001 },
      { id: "tolMm", labelTh: "เกณฑ์คลาดเคลื่อนยอมรับได้ (mm)", labelEn: "Tolerance Limit (mm)", unit: "mm", type: "number", default: 10.0, step: 1.0 }
    ],
    outputs: [
      { id: "hi", labelTh: "ความสูงแนวเล็งกล้อง (HI)", labelEn: "Height of Instrument (HI)", unit: "m" },
      { id: "actElev", labelTh: "ระดับความสูงจริงที่วัดได้", labelEn: "Computed Actual Elevation", unit: "m" },
      { id: "diffMm", labelTh: "ผลต่างเทียบแบบ (ΔH)", labelEn: "Elevation Difference (ΔH)", unit: "mm" },
      { id: "status", labelTh: "สถานะการตรวจสอบ", labelEn: "Tolerance Evaluation", unit: "" }
    ],
    formulas: {
      latex: "HI = BM_{\\text{elev}} + BS \\\\[6pt] \\text{Elev}_{\\text{actual}} = HI - FS \\\\[6pt] \\Delta H_{\\text{mm}} = (\\text{Elev}_{\\text{actual}} - \\text{Elev}_{\\text{design}}) \\times 1000",
      plain: "HI = BM_elev + BS\nElev_actual = HI - FS\nDiff_mm = (Elev_actual - Elev_design) * 1000\nประเมิน PASS หาก |Diff_mm| <= Tolerance"
    },
    stepsTh: [
      "1. ตั้งกล้องระดับในตำแหน่งที่มองเห็นทั้งหมุด BM และจุดตรวจงาน",
      "2. ส่องอ่านไม้สต๊าฟบนหมุด BM เพื่อคำนวณ HI",
      "3. ส่องอ่านไม้สต๊าฟบนจุดก่อสร้างจริง (FS)",
      "4. กรอกระดับตามแบบและเกณฑ์คลาดเคลื่อนยอมรับได้ (เช่น 10 มม.)",
      "5. กด 'คำนวณ' เพื่อดูระดับจริงและสถานะ PASS/FAIL ทันที"
    ],
    stepsEn: [
      "1. Set up leveling instrument with clear sightlines to BM and target points.",
      "2. Read staff on benchmark to resolve HI.",
      "3. Read staff on as-built point (FS).",
      "4. Input design elevation and millimeter tolerance limit (e.g. 10 mm).",
      "5. Tap 'Calculate' to see actual level and immediate PASS/FAIL status."
    ],
    example: {
      descTh: "BM=50.000m, BS=1.450m -> HI=51.450m, แบบ 49.850m, FS=1.595m -> ระดับจริง 49.855m (ΔH = +5.0 mm PASS)",
      descEn: "BM=50.000m, BS=1.450m -> HI=51.450m, Design 49.850m, FS=1.595m -> Actual 49.855m (ΔH = +5.0 mm PASS)"
    },
    tipsTh: "ตรวจสอบให้แน่ใจว่าได้ปรับฟองกลมของกล้องระดับให้อยู่กึ่งกลางเสมอ และเช็คว่าไม้สต๊าฟตั้งตรงดิ่ง",
    tipsEn: "Ensure the circular vial is strictly centered and the leveling rod is held plumb.",
    highlightsTh: [
      "คำนวณถ่ายระดับ (HI = BM + BS, Elev = HI - FS) พร้อมตรวจสอบระดับก่อสร้างจริงเทียบกับค่าระดับออกแบบ",
      "ระบบแจ้งเตือนสถานะ PASS/FAIL อัตโนมัติทันทีตามเกณฑ์คลาดเคลื่อนยอมรับได้ (เช่น ±10 มม.)",
      "คำนวณค่าขุด/ถม (Cut/Fill) ระดับมิลลิเมตรหน้างาน ควบคุมการปรับเกลี่ยดินและงานเข้าแบบได้ทันที",
      "บันทึกระดับหลายจุดต่อเนื่อง และส่งออกสมุดระดับสนามเป็น PDF พร้อมตารางตรวจสอบและช่องลงนาม"
    ],
    highlightsEn: [
      "Differential leveling engine solving HI and target elevations with instantaneous design check",
      "Immediate PASS/FAIL tolerance evaluation based on configurable millimeter criteria (e.g. ±10 mm)",
      "Real-time millimeter cut/fill readouts for active earthwork subgrades and formwork adjustments",
      "Continuous multi-station leveling line logging with official PDF field book export and signature blocks"
    ],
    calculate: (inputs) => {
      const bm = inputs.bmElev || 0;
      const bs = inputs.bsReading || 0;
      const des = inputs.desElev || 0;
      const fs = inputs.fsReading || 0;
      const tol = inputs.tolMm || 10;
      const hi = bm + bs;
      const act = hi - fs;
      const diff = (act - des) * 1000;
      const isPass = Math.abs(diff) <= tol;
      return {
        hi: hi.toFixed(3) + " m",
        actElev: act.toFixed(3) + " m",
        diffMm: (diff >= 0 ? "+" : "") + diff.toFixed(1) + " mm",
        status: isPass ? `PASS (อยู่ในเกณฑ์ <= ±${tol} mm)` : `FAIL (เกินเกณฑ์ > ±${tol} mm - ต้องปรับระดับดิน/คอนกรีต)`
      };
    }
  },

  {
    id: "route-alignment",
    num: 16,
    nameTh: "คำนวณพิกัดตามแนวเส้น",
    nameEn: "Route Alignment",
    subtitleTh: "นำเข้า LandXML",
    subtitleEn: "LandXML Spiral & Arc Alignment",
    category: "curve",
    isPro: true,
    icon: "fa-solid fa-road",
    summaryTh: "ถอดข้อมูลสายทางจาก Civil 3D คำนวณพิกัดสเตชั่นและออฟเซ็ตบนทางโค้งก้นหอยคลอทอยด์ พร้อมพล็อตแบบจำลอง 2D",
    summaryEn: "Parses LandXML alignments; computes station and offset coordinates across tangents, circular arcs, and clothoid spirals.",
    keywords: ["alignment", "landxml", "civil3d", "spiral", "clothoid", "สายทาง", "สเตชั่น", "ออฟเซ็ต", "โค้งก้นหอย"],
    overviewTh: "นำเข้าข้อมูลแนวสายทางมาตรฐานสากล LandXML จากโปรแกรม Autodesk Civil 3D หรือ 12d Model เพื่อคำนวณพิกัดสเตชั่นและระยะออฟเซ็ตบนแนวโค้งก้นหอยคลอทอยด์ (Clothoid Transition Spiral) และโค้งวงกลมได้อย่างแม่นยำระดับมิลลิเมตร พร้อมแผนภาพจำลอง 2D บนหน้าจอ",
    overviewEn: "Ingests LandXML route data from Autodesk Civil 3D. Computes coordinates along complex alignments including straight tangents, circular curves, and clothoid transition spirals with 2D vector graphic plots.",
    standardTh: "มาตรฐาน LandXML 1.2 สมาคมวิศวกรรมทางหลวงสากล",
    standardEn: "LandXML 1.2 Open Industry Standard for Civil Alignment Geometry",
    inputs: [
      { id: "startN", labelTh: "พิกัดเริ่มต้น N (m)", labelEn: "Start Northing (N)", unit: "m", type: "number", default: 1000.000, step: 0.001 },
      { id: "startE", labelTh: "พิกัดเริ่มต้น E (m)", labelEn: "Start Easting (E)", unit: "m", type: "number", default: 500.000, step: 0.001 },
      { id: "tangentAz", labelTh: "ทิศทางแนวสัมผัส (องศา)", labelEn: "Tangent Azimuth (Deg)", unit: "deg", type: "number", default: 45.0, step: 0.1 },
      { id: "targetSta", labelTh: "สเตชั่นเป้าหมาย (m)", labelEn: "Target Station (m)", unit: "m", type: "number", default: 250.0, step: 10.0 },
      { id: "targetOs", labelTh: "ระยะเยื้อง (+ขวา, -ซ้าย)", labelEn: "Offset (+Right, -Left)", unit: "m", type: "number", default: 12.5, step: 0.5 }
    ],
    outputs: [
      { id: "calcN", labelTh: "พิกัดเป้าหมาย N", labelEn: "Target Northing (N)", unit: "m" },
      { id: "calcE", labelTh: "พิกัดเป้าหมาย E", labelEn: "Target Easting (E)", unit: "m" },
      { id: "tangentHeading", labelTh: "ทิศทางแนวสัมผัส ณ สเตชั่น", labelEn: "Tangent Bearing at Station", unit: "deg" }
    ],
    formulas: {
      latex: "X(l) = l - \\frac{l^5}{40 A^4} + \\frac{l^9}{3456 A^8}, \\quad Y(l) = \\frac{l^3}{6 A^2} - \\frac{l^7}{336 A^6} \\\\[6pt] N = N_{\\text{center}} + \\text{Offset} \\cdot \\cos(\\text{Az} \\pm 90^{\\circ})",
      plain: "สมการคลอทอยด์ (Clothoid Spiral) ขยายด้วยอนุกรม Taylor\nพิกัดออฟเซ็ตบวกเพิ่มในแนวตั้งฉากกับแนวสัมผัส ณ สเตชั่นนั้นๆ"
    },
    stepsTh: [
      "1. โหลดหรือระบุข้อมูลพารามิเตอร์สายทาง",
      "2. ป้อนสเตชั่นและระยะออฟเซ็ตที่ต้องการวางหมุด",
      "3. กด 'คำนวณ' ระบบจะคำนวณพิกัด N, E และทิศทางแนวสัมผัส",
      "4. นำพิกัดไปสเตคเอาต์ในสนาม"
    ],
    stepsEn: [
      "1. Load or specify route alignment parameters.",
      "2. Enter target chainage and offset distance.",
      "3. Tap 'Calculate' to resolve coordinates and tangent azimuth.",
      "4. Export points for stakeout."
    ],
    example: {
      descTh: "เริ่ม (1000, 500), Az=45°, สเตชั่น 250 ม., ออฟเซ็ต +12.5 ม. -> พิกัด N=1185.617, E=667.973",
      descEn: "Start (1000, 500), Az=45°, Sta 250m, Offset +12.5m -> N=1185.617, E=667.973"
    },
    tipsTh: "การใช้ไฟล์ LandXML ช่วยลดความผิดพลาดในการกรอกข้อมูลเรขาคณิตสายทางด้วยมือ 100%",
    tipsEn: "Importing LandXML files eliminates 100% of manual data entry errors on route geometry.",
    highlightsTh: [
      "ถอดข้อมูลแนวสายทางมาตรฐาน LandXML 1.2 จาก Autodesk Civil 3D หรือ 12d Model ได้โดยตรง ไม่ต้องพิมพ์มือ",
      "รองรับเรขาคณิตสายทางครบถ้วน: ทางตรง (Tangent), โค้งวงกลม (Circular Arc), และโค้งก้นหอยคลอทอยด์ (Spiral)",
      "คำนวณแปลงค่าสองทิศทางระหว่าง Station/Offset กับพิกัดราบ N, E พร้อมทิศทางแนวสัมผัส (Tangent Azimuth)",
      "แผนภาพจำลองแนวสายทาง 2D แสดงตำแหน่งจุดออฟเซ็ต พร้อมส่งออกตารางสเตชั่นวางหมุดงานทางและระบบราง"
    ],
    highlightsEn: [
      "Direct LandXML 1.2 alignment parser importing alignments from Civil 3D or 12d Model without manual entry",
      "Complete geometric alignment support: straight tangents, circular curves, and clothoid transition spirals",
      "Bidirectional conversion between Station/Offset and coordinates (N, E) with instantaneous tangent azimuth",
      "2D alignment visual diagram with offset positioning and exportable stakeout schedules for road and rail"
    ],
    calculate: (inputs) => {
      const az = (inputs.tangentAz || 0) * Math.PI / 180;
      const sN = inputs.startN || 0;
      const sE = inputs.startE || 0;
      const d = inputs.targetSta || 0;
      const os = inputs.targetOs || 0;
      const cN = sN + d * Math.cos(az);
      const cE = sE + d * Math.sin(az);
      const targetN = cN + os * Math.cos(az + Math.PI / 2);
      const targetE = cE + os * Math.sin(az + Math.PI / 2);
      return {
        calcN: targetN.toFixed(3) + " m",
        calcE: targetE.toFixed(3) + " m",
        tangentHeading: (inputs.tangentAz || 0).toFixed(2) + "°"
      };
    }
  },

  {
    id: "survey-calendar",
    num: 17,
    nameTh: "ปฏิทินงาน",
    nameEn: "Survey Calendar",
    subtitleTh: "แผนงานสำรวจ",
    subtitleEn: "Field Mission Diary",
    category: "field_util",
    isPro: false,
    icon: "fa-solid fa-calendar-days",
    summaryTh: "บันทึกและจัดการตารางนัดหมายงานสำรวจภาคสนาม ตารางเข้าแปลงที่ดิน และกำหนดส่งมอบงาน รองรับปี พ.ศ./ค.ศ.",
    summaryEn: "Field scheduling and diary tool for survey party chiefs managing client inspection dates and milestones.",
    keywords: ["calendar", "schedule", "ปฏิทิน", "นัดหมาย", "ส่งมอบ", "diary", "ภารกิจ"],
    overviewTh: "ปฏิทินบันทึกภารกิจและนัดหมายเฉพาะทางสำหรับหัวหน้าชุดสำรวจ จัดการวันนัดรังวัดตรวจสอบแปลงที่ดินกับเจ้าหน้าที่ที่ดิน วันนัดตรวจงานร่วมกับวิศวกรผู้ว่าจ้าง และวันครบกำหนดส่งมอบแบบ As-Built แสดงผลทั้งปี พ.ศ. และ ค.ศ. พร้อมระบบแจ้งเตือนภารกิจล่วงหน้า",
    overviewEn: "Field mission planner tailored for survey party chiefs. Manages boundary inspection appointments with land officers, consultant walkthroughs, and As-Built drawing deliverables with bilingual calendar indexing.",
    standardTh: "แนวทางปฏิบัติการบริหารงานสำรวจภาคสนาม",
    standardEn: "Survey Project Execution & Milestone Diary Protocols",
    inputs: [
      { id: "eventsMonth", labelTh: "จำนวนภารกิจในเดือนนี้", labelEn: "Missions This Month", unit: "events", type: "number", default: 8, step: 1 },
      { id: "daysRemaining", labelTh: "วันคงเหลือก่อนส่งมอบงาน", labelEn: "Days until Milestone", unit: "days", type: "number", default: 12, step: 1 }
    ],
    outputs: [
      { id: "missionStatus", labelTh: "สถานะตารางงาน", labelEn: "Schedule Status", unit: "" },
      { id: "deliveryDate", labelTh: "กำหนดส่งมอบงาน", labelEn: "Deliverable Due", unit: "" }
    ],
    formulas: {
      latex: "\\text{Due Date} = \\text{Today} + \\Delta \\text{Days}",
      plain: "ระบบจัดการตารางนัดหมายและบันทึกประวัติการรังวัดรายวัน"
    },
    stepsTh: [
      "1. เปิดหน้าปฏิทินงานสำรวจ",
      "2. แตะเลือกวันที่ต้องการสร้างนัดหมาย",
      "3. ระบุชื่อโครงการ ช่างสำรวจรับผิดชอบ และรายละเอียดงาน",
      "4. ตั้งเวลาแจ้งเตือนล่วงหน้า 1 วัน"
    ],
    stepsEn: [
      "1. Open Survey Calendar.",
      "2. Tap date to schedule inspection.",
      "3. Input project title, party chief, and scope.",
      "4. Enable 1-day advance reminder alert."
    ],
    example: {
      descTh: "8 ภารกิจในเดือนนี้, เหลือกำหนดส่งมอบ 12 วัน",
      descEn: "8 field missions this month, 12 days remaining until milestone"
    },
    tipsTh: "บันทึกสภาพอากาศและอุปสรรคหน้างานลงในบันทึกประจำวัน เพื่อใช้เป็นหลักฐานประกอบการขอขยายระยะเวลาสัญญา",
    tipsEn: "Log rain delays and site obstacles in daily notes as formal contractual records.",
    highlightsTh: [
      "ปฏิทินบันทึกภารกิจและนัดหมายเฉพาะทาง จัดการวันนัดรังวัด วันตรวจสอบร่วม และวันส่งมอบงาน As-Built",
      "แสดงผลทั้งปี พ.ศ. และ ค.ศ. พร้อมระบบนับถอยหลังสู่วันส่งมอบ (Milestone Countdown) และเตือนล่วงหน้า",
      "บันทึกสภาพอากาศ ฝนตก และอุปสรรคหน้างานรายวัน เพื่อใช้เป็นหลักฐานประกอบการขอขยายระยะเวลาสัญญา",
      "จัดเก็บข้อมูลลงในเครื่อง 100% ใช้งานแบบออฟไลน์ได้ทุกพื้นที่ไซต์งานโดยไม่ต้องพึ่งพาสัญญาณอินเทอร์เน็ต"
    ],
    highlightsEn: [
      "Dedicated field mission diary and scheduling calendar for survey party chiefs and site engineers",
      "Bilingual Thai BE and Gregorian calendar support with active milestone countdown timers and advance reminders",
      "Logs site weather, rain delays, and operational obstacles as formal legal records for contractual time extensions",
      "100% on-device local storage functioning seamlessly offline in remote field sites without cellular coverage"
    ],
    calculate: (inputs) => {
      const rem = inputs.daysRemaining || 12;
      const today = new Date();
      const due = new Date(today.getTime() + rem * 86400000);
      return {
        missionStatus: `มี ${inputs.eventsMonth || 8} ภารกิจในแผนงาน (ดำเนินงานปกติ)`,
        deliveryDate: `ครบกำหนดส่งมอบ: ${due.toLocaleDateString('th-TH')} (${rem} วันคงเหลือ)`
      };
    }
  },

  {
    id: "location-here",
    num: 18,
    nameTh: "ตำแหน่ง",
    nameEn: "Location Here",
    subtitleTh: "ที่นี่",
    subtitleEn: "Real-time GNSS & UTM Coordinates",
    category: "field_util",
    isPro: false,
    icon: "fa-solid fa-map-pin",
    summaryTh: "อ่านค่าพิกัดดาวเทียม GNSS แปลงเป็นกริด UTM แสดงทิศทางเข็มทิศ และมีโหมดหาค่าเฉลี่ยตัวอย่างเพื่อความแม่นยำสูงสุด",
    summaryEn: "Instant GPS/GNSS receiver reading WGS84 and UTM coordinates with compass heading and multi-sampling averaging.",
    keywords: ["location", "gps", "gnss", "พิกัดปัจจุบัน", "ที่นี่", "utm", "wgs84", "เข็มทิศ", "accuracy"],
    overviewTh: "อ่านค่าพิกัดจากชิปดาวเทียม GNSS ของอุปกรณ์โดยตรง แปลงค่าเป็นพิกัดกริด UTM ทันที พร้อมแสดงระดับความแม่นยำ (Accuracy ± m) ทิศทางการหันของอุปกรณ์ และโหมดสุ่มเก็บตัวอย่างเฉลี่ย (Multi-sample averaging) เพื่อกรองสัญญาณหลุดและเพิ่มความถูกต้องของพิกัด",
    overviewEn: "Directly accesses mobile multi-GNSS receiver hardware. Provides instantaneous WGS84 geographic and UTM grid readouts, accuracy radius indicators, compass heading, and multi-sample averaging mode to filter satellite multipath noise.",
    standardTh: "มาตรฐานการหาตำแหน่งด้วยดาวเทียม GNSS บนอุปกรณ์เคลื่อนที่",
    standardEn: "Mobile GNSS Positioning Standards",
    inputs: [
      { id: "sampleCount", labelTh: "จำนวนรอบเฉลี่ยตัวอย่าง", labelEn: "Averaging Samples", unit: "samples", type: "number", default: 10, min: 1, max: 100, step: 5 },
      { id: "targetZone", labelTh: "โซน UTM ที่ต้องการแสดง", labelEn: "Target UTM Zone", unit: "zone", type: "number", default: 47, step: 1 }
    ],
    outputs: [
      { id: "accGrade", labelTh: "ระดับความน่าเชื่อถือ GNSS", labelEn: "GNSS Fix Quality", unit: "" },
      { id: "noiseFilter", labelTh: "การกรองสัญญาณสะท้อน", labelEn: "Multipath Filtering", unit: "" }
    ],
    formulas: {
      latex: "\\bar{N} = \\frac{1}{M}\\sum_{i=1}^M N_i, \\quad \\bar{E} = \\frac{1}{M}\\sum_{i=1}^M E_i",
      plain: "พิกัดเฉลี่ย = ผลรวมพิกัดทุกตัวอย่าง / จำนวนตัวอย่าง (ตัดค่าคลาดเคลื่อนเกิน 3 sigma)"
    },
    stepsTh: [
      "1. เปิดแอปในพื้นที่โล่งแจ้ง ไม่มีอาคารสูงหรือหลังคาบดบัง",
      "2. กดเริ่มอ่านพิกัด 'ตำแหน่งที่นี่'",
      "3. รอให้ค่า Accuracy ลดลงต่ำกว่า 5 เมตร",
      "4. กดบันทึกพิกัดหรือส่งออกรายงาน PDF พร้อมแผนที่ดาวเทียม"
    ],
    stepsEn: [
      "1. Open app outdoors under open sky.",
      "2. Tap 'Location Here' positioning.",
      "3. Allow accuracy radius to settle under 5 meters.",
      "4. Tap Save or export map report."
    ],
    example: {
      descTh: "อ่านตัวอย่างเฉลี่ย 10 ตัวอย่างในโซน 47N -> คุณภาพสัญญาณดีเยี่ยม",
      descEn: "10-sample averaging in Zone 47N -> Excellent satellite fix quality"
    },
    tipsTh: "หลีกเลี่ยงการอ่านพิกัดใต้ชายคาอาคารหรือใกล้กระจกเงาขนาดใหญ่ เพราะจะเกิดความคลาดเคลื่อนจากสัญญาณสะท้อน (Multipath)",
    tipsEn: "Avoid readings near metallic cladding or sheer glass facades to mitigate multipath errors.",
    highlightsTh: [
      "อ่านค่าพิกัดดาวเทียม GNSS แปลงเป็นกริด UTM ทันที พร้อมเข็มทิศบอกทิศทางการหันของอุปกรณ์แบบ Real-time",
      "โหมดเก็บตัวอย่างเฉลี่ย (Multi-sample Averaging) กรองสัญญาณสะท้อน Multipath เพื่อความแม่นยำสูงสุด",
      "แสดงรัศมีความคลาดเคลื่อน (Accuracy ± m) ระดับคุณภาพสัญญาณ และจำนวนดาวเทียมที่รับสัญญาณได้",
      "บันทึกจุด Waypoint พร้อมรูปถ่ายและบันทึกช่วยจำ ส่งออกรายงานพิกัดสนามพร้อมแผนที่ดาวเทียมในตัว"
    ],
    highlightsEn: [
      "Instant multi-GNSS satellite fix converting to UTM Grid (N/E) with real-time compass heading orientation",
      "Multi-sample averaging mode filtering out multipath satellite reflection noise for maximal field accuracy",
      "Live visual display of horizontal accuracy radius (± m), fix quality grade, and connected satellite status",
      "One-tap waypoint recording with georeferenced notes, photos, and formal field coordinate report export"
    ],
    calculate: (inputs) => {
      const samples = inputs.sampleCount || 10;
      return {
        accGrade: `คุณภาพสัญญาณ: ยอดเยี่ยม (ค่าเฉลี่ย ${samples} ตัวอย่าง, ความคลาดเคลื่อน ±1.5 ม.)`,
        noiseFilter: "ระบบกรองสัญญาณสะท้อน Multipath: เปิดใช้งาน (Active)"
      };
    }
  },

  {
    id: "bubble-level",
    num: 19,
    nameTh: "วัดระดับน้ำ",
    nameEn: "Bubble Level & Screen Ruler",
    subtitleTh: "ฟองกลม & สเกล",
    subtitleEn: "Spirit Level & Calibrated Ruler",
    category: "field_util",
    isPro: false,
    icon: "fa-solid fa-arrows-to-dot",
    summaryTh: "ลูกน้ำวัดระดับความเอียงของขาตั้งกล้องและพื้นผิว แสดงค่า mm/m พร้อมไม้บรรทัดเทียบสเกลข้างจอ",
    summaryEn: "2D bullseye and dual-axis spirit levels with civil slope readouts in mm/m and calibrated on-screen ruler.",
    keywords: ["bubble", "level", "ระดับน้ำ", "ฟองกลม", "ไม้บรรทัด", "ความลาดเอียง", "slope", "tilt", "ruler"],
    overviewTh: "จำลองลูกน้ำฟองกลม (Circular Bullseye) และหลอดระดับฟองยาว (Tubular Level) โดยใช้เซนเซอร์ Gyroscope และ Accelerometer ในโทรศัพท์ แสดงค่าความลาดเอียงเป็นองศาและหน่วยความลาดชันวิศวกรรม (mm/m) พร้อมไม้บรรทัดมาตราส่วนจริงขอบจอสำหรับวัดชิ้นงาน",
    overviewEn: "Emulates 2D circular bullseye and dual-axis tubular vials using phone gyroscopes. Displays tilt in degrees and engineering slope in mm/m alongside a calibrated on-screen millimeter scale.",
    standardTh: "มาตรฐานเครื่องมือวัดความลาดเอียงทางวิศวกรรม",
    standardEn: "Electronic Inclinometer & Spirit Level Benchmarks",
    inputs: [
      { id: "pitchAngle", labelTh: "มุมเอียงแนวแกน Pitch (องศา)", labelEn: "Pitch Angle (Deg)", unit: "deg", type: "number", default: 0.4, step: 0.1 },
      { id: "rollAngle", labelTh: "มุมเอียงแนวแกน Roll (องศา)", labelEn: "Roll Angle (Deg)", unit: "deg", type: "number", default: 0.3, step: 0.1 }
    ],
    outputs: [
      { id: "totTilt", labelTh: "ความเอียงรวม (Total Tilt)", labelEn: "Combined Tilt", unit: "deg" },
      { id: "slopeMmM", labelTh: "ความลาดชันวิศวกรรม", labelEn: "Engineering Slope", unit: "mm/m" },
      { id: "levelState", labelTh: "สถานะการได้ระดับ", labelEn: "Level Status", unit: "" }
    ],
    formulas: {
      latex: "\\text{Tilt} = \\sqrt{\\text{Pitch}^2 + \\text{Roll}^2} \\\\[6pt] \\text{Slope (mm/m)} = \\tan(\\text{Tilt} \\times \\frac{\\pi}{180}) \\times 1000",
      plain: "Total Tilt = sqrt(Pitch² + Roll²)\nSlope (mm/m) = tan(Tilt in radians) * 1000\nได้ระดับเมื่อ Pitch และ Roll < 1.0° (ฟองน้ำเปลี่ยนเป็นสีเขียว)"
    },
    stepsTh: [
      "1. วางโทรศัพท์ราบบนแท่นขาตั้งกล้องหรือพื้นผิวที่ต้องการวัด",
      "2. สังเกตฟองน้ำกลมบนหน้าจอ: ถ้าได้ระดับ วงกลมจะเปลี่ยนเป็นสีเขียว",
      "3. อ่านค่าความลาดชันเป็น mm/m เพื่อปรับระดับฐานตั้งกล้องหรือแบบหล่อ"
    ],
    stepsEn: [
      "1. Lay mobile device flat upon tripod head or surface.",
      "2. Observe circular bullseye: turns green when leveled.",
      "3. Read slope in mm/m to adjust tribrach screws or formwork."
    ],
    example: {
      descTh: "Pitch=0.4°, Roll=0.3° -> ความเอียงรวม 0.50°, ความลาดชัน 8.7 mm/m (ได้ระดับปกติ)",
      descEn: "Pitch=0.4°, Roll=0.3° -> Total tilt 0.50°, Slope 8.7 mm/m (Level state confirmed)"
    },
    tipsTh: "วางเครื่องบนโต๊ะปรับระดับและกดปุ่ม 'Calibrate' เพื่อชดเชยความหนาของเลนส์กล้องด้านหลังโทรศัพท์",
    tipsEn: "Use the on-screen Calibrate button on a known level surface to zero-out camera bump thickness.",
    highlightsTh: [
      "ลูกน้ำวัดระดับดิจิทัล 2 ระบบ: ฟองกลม (Circular Bullseye) และหลอดฟองยาว (Tubular Level) จากเซนเซอร์ในเครื่อง",
      "แสดงค่ามุมเอียง Pitch/Roll และแปลงเป็นหน่วยความลาดชันทางวิศวกรรม (mm/m และเปอร์เซ็นต์ Slope)",
      "วงกลมเปลี่ยนสีเขียวเมื่อได้ระดับในเกณฑ์ ±1.0° พร้อมปุ่ม Calibrate ชดเชยความหนาของเลนส์กล้องมือถือ",
      "ไม้บรรทัดเทียบสเกลมิลลิเมตรจริงบนขอบจอ สำหรับวัดขนาดเหล็ก สลักเกลียว หรือรอยร้าวในชิ้นงานก่อสร้าง"
    ],
    highlightsEn: [
      "Dual digital spirit levels: 2D circular bullseye and dual-axis tubular inclinometer powered by device gyros",
      "Displays pitch and roll angles in degrees and converts to civil engineering slope readouts (mm/m and %)",
      "Visual green level confirmation within ±1.0° with custom zero-calibration compensating for phone camera bumps",
      "Calibrated true-scale millimeter screen ruler for rapid measurements of rebar, anchor bolts, or concrete cracks"
    ],
    calculate: (inputs) => {
      const p = inputs.pitchAngle || 0;
      const r = inputs.rollAngle || 0;
      const tilt = Math.hypot(p, r);
      const slope = Math.tan(tilt * Math.PI / 180) * 1000;
      const isLevel = Math.abs(p) < 1.0 && Math.abs(r) < 1.0;
      return {
        totTilt: tilt.toFixed(2) + "°",
        slopeMmM: slope.toFixed(1) + " mm/m",
        levelState: isLevel ? "ได้ระดับสมบูรณ์ (LEVEL - ฟองกลมสีเขียว)" : "ยังไม่ได้ระดับ (UNLEVEL - ต้องปรับขาตั้ง)"
      };
    }
  },

  {
    id: "equipment-tracker",
    num: 20,
    nameTh: "รายการอุปกรณ์",
    nameEn: "Equipment Tracker",
    subtitleTh: "ทะเบียนเครื่องมือ",
    subtitleEn: "Calibration Lifecycle & Inventory",
    category: "field_util",
    isPro: false,
    icon: "fa-solid fa-toolbox",
    summaryTh: "ทะเบียนคุมอุปกรณ์สำรวจ ติดตามรอบการสอบเทียบตามมาตรฐาน ISO เตือนวันหมดอายุ และเก็บภาพใบเซอร์",
    summaryEn: "Field equipment asset registry and calibration tracker with expiry alerts and certificate archiving.",
    keywords: ["equipment", "อุปกรณ์", "สอบเทียบ", "calibration", "ใบเซอร์", "ทะเบียนคุม", "total station", "iso"],
    overviewTh: "ระบบบริหารจัดการทะเบียนคุมเครื่องมือสำรวจ (Total Station, GNSS, กล้องระดับ) ตามมาตรฐานระบบคุณภาพ ISO 9001 ติดตามรอบกำหนดสอบเทียบ (Calibration Due Dates) ส่งสัญญาณเตือนล่วงหน้า 30 วัน พร้อมจัดเก็บภาพถ่ายตัวเครื่องและเอกสารใบรับรอง",
    overviewEn: "Field equipment asset management conforming to ISO 9001 QA/QC standards. Tracks calibration intervals, fires 30-day advance expiry notifications, and archives digital copies of calibration certificates.",
    standardTh: "มาตรฐานระบบบริหารงานคุณภาพ ISO 9001:2015 ข้อกำหนดการควบคุมอุปกรณ์ตรวจวัด",
    standardEn: "ISO 9001:2015 Monitoring and Measuring Resources Compliance",
    inputs: [
      { id: "calibInterval", labelTh: "รอบการสอบเทียบ (เดือน)", labelEn: "Calibration Interval", unit: "months", type: "number", default: 12, min: 1, max: 24, step: 1 },
      { id: "monthsPassed", labelTh: "จำนวนเดือนที่ใช้งานมาแล้ว", labelEn: "Months Since Calibration", unit: "months", type: "number", default: 11, min: 0, max: 36, step: 1 }
    ],
    outputs: [
      { id: "certStatus", labelTh: "สถานะใบรับรอง", labelEn: "Certificate Health", unit: "" },
      { id: "actionNeeded", labelTh: "ข้อเสนอแนะในการปฏิบัติ", labelEn: "Required Action", unit: "" }
    ],
    formulas: {
      latex: "\\text{Months Left} = \\text{Interval} - \\text{Months Passed}",
      plain: "สถานะ: GOOD (ถ้าเหลือ > 1 เดือน), WARNING (ถ้าเหลือ <= 1 เดือน), EXPIRED (ถ้าเกินกำหนด)"
    },
    stepsTh: [
      "1. ลงทะเบียนเครื่องมือ: ชื่อรุ่น, ยี่ห้อ, หมายเลข Serial Number",
      "2. ระบุวันที่สอบเทียบล่าสุดและรอบเวลาที่ต้องส่งตรวจ",
      "3. แนบรูปถ่ายใบ Certificate ของศูนย์สอบเทียบ",
      "4. ระบบจะแจ้งเตือนเมื่อใกล้ครบกำหนดส่งกล้องเข้าแล็บ"
    ],
    stepsEn: [
      "1. Register instrument: Make, model, serial number.",
      "2. Specify last calibration date and required cycle.",
      "3. Attach certificate photo.",
      "4. The system triggers visual warnings 30 days prior to expiry."
    ],
    example: {
      descTh: "รอบ 12 เดือน, ใช้งานมาแล้ว 11 เดือน -> สถานะเตือน: เหลือเวลา 1 เดือน (เตรียมส่งสอบเทียบ)",
      descEn: "12-month interval, 11 months elapsed -> WARNING: 1 month remaining (Schedule recalibration)"
    },
    tipsTh: "การใช้กล้องที่หมดอายุใบสอบเทียบอาจทำให้ผู้ว่าจ้างปฏิเสธผลงานสำรวจและเอกสาร As-Built ทั้งหมด",
    tipsEn: "Expired calibration certificates can cause client QA/QC inspectors to reject all survey submissions.",
    highlightsTh: [
      "ทะเบียนคุมเครื่องมือสำรวจ (Total Station, GNSS, กล้องระดับ) ตามมาตรฐานระบบคุณภาพ ISO 9001",
      "ระบบนับถอยหลังและแจ้งเตือนสถานะใบรับรอง 3 ระดับ: ปกติ (เขียว), ใกล้หมดอายุ (ส้ม), และหมดอายุแล้ว (แดง)",
      "บันทึก Serial No., เลขที่ใบเซอร์ พร้อมแนบรูปถ่ายตัวเครื่องและเอกสารใบรับรองจากศูนย์สอบเทียบ",
      "ป้องกันการถูกปฏิเสธผลงานสำรวจจากวิศวกรที่ปรึกษา และส่งออกทะเบียนคุมอุปกรณ์เป็น PDF ในคลิกเดียว"
    ],
    highlightsEn: [
      "Centralized survey equipment asset register compliant with ISO 9001 quality assurance requirements",
      "Automated calibration expiry countdown with 3-tier status badges: Good (Green), Warning (Orange), Expired (Red)",
      "Tracks serial numbers, certificate records, and archives digital copies of calibration lab documentation",
      "Prevents site work rejections by consultant inspectors and exports full equipment registry to PDF in one tap"
    ],
    calculate: (inputs) => {
      const interval = inputs.calibInterval || 12;
      const passed = inputs.monthsPassed || 11;
      const left = interval - passed;
      let status = "ปกติ (GOOD - ใบรับรองยังไม่หมดอายุ)";
      let act = "สามารถนำเครื่องมือไปใช้งานภาคสนามได้ตามปกติ";
      if (left <= 0) {
        status = "หมดอายุแล้ว! (EXPIRED)";
        act = "ห้ามนำกล้องออกใช้งานภาคสนาม! ต้องส่งศูนย์สอบเทียบทันที";
      } else if (left <= 1) {
        status = "ใกล้หมดอายุ (WARNING - เหลือไม่เกิน 30 วัน)";
        act = "ติดต่อจองคิวศูนย์สอบเทียบเพื่อป้องกันงานสะดุด";
      }
      return {
        certStatus: status,
        actionNeeded: act
      };
    }
  },

  {
    id: "total-station-calib",
    num: 21,
    nameTh: "สอบเทียบ",
    nameEn: "Total Station Calibration",
    subtitleTh: "กล้องวัดมุม ISO 17123-5",
    subtitleEn: "ISO 17123-5 Collimation & EDM Verification",
    category: "field_util",
    isPro: true,
    icon: "fa-solid fa-certificate",
    summaryTh: "ทดสอบและสอบเทียบกล้อง Total Station ภาคสนามตามมาตรฐาน ISO 17123-5 พร้อมออกใบรับรอง PDF มีลายน้ำ",
    summaryEn: "Field testing and calibration procedures for Total Stations in accordance with ISO 17123-5 issuing watermarked PDF certificates.",
    keywords: ["collimation", "total station", "สอบเทียบ", "iso 17123-5", "แกนเล็ง", "มุมดิ่ง", "edm", "ระยะทาง", "ใบเซอร์"],
    overviewTh: "ขั้นตอนการตรวจสอบและสอบเทียบกล้อง Total Station ภาคสนามตามมาตรฐานสากล ISO 17123-5 ครอบคลุมการตรวจเช็คหลอดระดับ ฟองกลม กล้องส่องหมุด ความคลาดเคลื่อนดัชนีมุมดิ่ง (Vertical Index Error: V_err <= 10\"), ความคลาดเคลื่อนแกนเล็งราบ (Horizontal Collimation Error: C_err <= 10\") และการวัดระยะทาง 2 ช่วงเทียบระยะรวม พร้อมออกใบรับรองผลพร้อมลายน้ำ ISO",
    overviewEn: "Field procedure to test and verify electronic tacheometers (Total Stations) per ISO 17123-5 international standards. Checks plate level, optical plummet, vertical index error (<= 10\"), horizontal collimation error (<= 10\"), and two-stage EDM baseline repeatability.",
    standardTh: "มาตรฐานสากล ISO 17123-5: Optics and optical instruments — Field procedures for testing geodetic and surveying instruments (Total Stations)",
    standardEn: "ISO 17123-5 Geodetic Total Station Verification Standards",
    inputs: [
      { id: "vFL", labelTh: "มุมดิ่งหน้าซ้าย (V_FL องศา)", labelEn: "Vertical Angle FL (Deg)", unit: "deg", type: "number", default: 89.9986, step: 0.0001 },
      { id: "vFR", labelTh: "มุมดิ่งหน้าขวา (V_FR องศา)", labelEn: "Vertical Angle FR (Deg)", unit: "deg", type: "number", default: 270.0039, step: 0.0001 },
      { id: "hFL", labelTh: "มุมราบหน้าซ้าย (H_FL องศา)", labelEn: "Horizontal Angle FL", unit: "deg", type: "number", default: 45.0000, step: 0.0001 },
      { id: "hFR", labelTh: "มุมราบหน้าขวา (H_FR องศา)", labelEn: "Horizontal Angle FR", unit: "deg", type: "number", default: 224.9972, step: 0.0001 },
      { id: "d1", labelTh: "ระยะทางช่วงที่ 1 (D1)", labelEn: "Distance Stage 1 (D1)", unit: "m", type: "number", default: 30.000, step: 0.001 },
      { id: "d2", labelTh: "ระยะทางช่วงที่ 2 (D2)", labelEn: "Distance Stage 2 (D2)", unit: "m", type: "number", default: 40.000, step: 0.001 },
      { id: "dTot", labelTh: "ระยะทางรวมทั้งหมด (D_total)", labelEn: "Total Baseline (D_total)", unit: "m", type: "number", default: 70.001, step: 0.001 }
    ],
    outputs: [
      { id: "vErr", labelTh: "ความคลาดเคลื่อนมุมดิ่ง (V_err)", labelEn: "Vertical Index Error", unit: "sec" },
      { id: "cErr", labelTh: "ความคลาดเคลื่อนแกนเล็ง (C_err)", labelEn: "Collimation Error", unit: "sec" },
      { id: "distErr", labelTh: "ผลต่างระยะทาง EDM (Diff)", labelEn: "EDM Distance Diff", unit: "mm" },
      { id: "isoStatus", labelTh: "การประเมินมาตรฐาน ISO", labelEn: "ISO Certification Status", unit: "" }
    ],
    formulas: {
      latex: "V_{\\text{err}} = \\frac{(V_{FL} + V_{FR} - 360^{\\circ}) \\times 3600}{2} \\\\[6pt] C_{\\text{err}} = \\frac{(H_{FL} - H_{FR} \\pm 180^{\\circ}) \\times 3600}{2} \\\\[6pt] \\Delta D = |(D_1 + D_2) - D_{\\text{total}}| \\times 1000",
      plain: "V_err = ((V_FL + V_FR - 360) * 3600) / 2  (เกณฑ์ยอมรับ <= 10 ฟิลิปดา)\nC_err = ((H_FL - H_FR ± 180) * 3600) / 2  (เกณฑ์ยอมรับ <= 10 ฟิลิปดา)\nDiff = |(D1 + D2) - D_total| * 1000  (เกณฑ์ยอมรับ <= 3.0 มม.)"
    },
    stepsTh: [
      "1. ตั้งกล้องบนฐานที่มั่นคง ปรับฟองน้ำยาวและฟองกลมให้ได้ระดับสมบูรณ์",
      "2. ส่องเป้าหมายที่อยู่ห่างออกไป > 50 ม. ในหน้าซ้าย บันทึกค่ามุมดิ่งและมุมราบ",
      "3. พลิกกล้องสลับเป็นหน้าขวา ส่องเป้าหมายเดิม บันทึกค่ามุมดิ่งและมุมราบ",
      "4. ทำการวัดระยะทางแบบแบ่งช่วง 2 ช่วง (D1, D2) และวัดระยะรวม (D_total)",
      "5. กด 'คำนวณ' เพื่อรับผลการประเมินตามเกณฑ์ ISO 17123-5 พร้อมพิมพ์ใบเซอร์"
    ],
    stepsEn: [
      "1. Set up instrument on stable tripod; level plate vial strictly.",
      "2. Sight distant target (> 50 m) in Face Left; record V and H angles.",
      "3. Transmit telescope to Face Right; sight same target; record angles.",
      "4. Measure 2-stage EDM baseline segments (D1, D2) and overall line (D_total).",
      "5. Tap 'Calculate' to evaluate ISO 17123-5 compliance and generate certificate."
    ],
    example: {
      descTh: "V_FL=89.9986°, V_FR=270.0039° -> V_err=+4.5\", C_err=-5.0\", EDM diff=1.0 mm (ผ่านเกณฑ์ ISO ทุกรายการ)",
      descEn: "V_FL=89.9986°, V_FR=270.0039° -> V_err=+4.5\", C_err=-5.0\", EDM diff=1.0 mm (Full ISO PASS)"
    },
    tipsTh: "การทดสอบควรทำในสภาพอากาศที่ไม่มีไอความร้อน (Shimmering) และมีแสงสว่างสม่ำเสมอ เช่น ช่วงเช้าหรือบ่ายคล้อย",
    tipsEn: "Conduct calibration during early morning or late afternoon to avoid heat shimmer atmospheric refraction.",
    highlightsTh: [
      "ขั้นตอนตรวจสอบความถูกต้องกล้อง Total Station ภาคสนามตามข้อกำหนดมาตรฐานสากล ISO 17123-5",
      "ตรวจสอบดัชนีมุมดิ่ง (V_err <= 10\") และความคลาดเคลื่อนแกนเล็งราบ (Collimation C_err <= 10\") จาก 2 หน้ากล้อง",
      "ทดสอบความคงที่ระยะทาง EDM ด้วยวิธี 2 ช่วงเทียบระยะรวม (Baseline Difference <= 3.0 มม.)",
      "ออกใบรับรองการสอบเทียบภาคสนาม (Field Calibration Certificate) รูปแบบ PDF พร้อมลายน้ำ ISO และบล็อกลงนาม"
    ],
    highlightsEn: [
      "Rigorous field testing and verification protocol strictly adhering to international ISO 17123-5 standards",
      "Evaluates Vertical Index Error (V_err <= 10\") and Horizontal Collimation (C_err <= 10\") via dual-face pointing",
      "Tests EDM baseline repeatability and scale stability using 2-stage segment comparison (Diff <= 3.0 mm)",
      "Generates official watermarked ISO 17123-5 Field Calibration Certificate PDF complete with sign-off blocks"
    ],
    calculate: (inputs) => {
      const vFL = inputs.vFL || 90;
      const vFR = inputs.vFR || 270;
      const hFL = inputs.hFL || 0;
      const hFR = inputs.hFR || 180;
      const d1 = inputs.d1 || 30;
      const d2 = inputs.d2 || 40;
      const dTot = inputs.dTot || 70;
      const vErr = ((vFL + vFR - 360) * 3600) / 2;
      let rawDiff = (hFL - hFR) % 360;
      if (rawDiff <= -180) rawDiff += 360;
      if (rawDiff > 180) rawDiff -= 360;
      const hDiff = rawDiff > 0 ? (rawDiff - 180) : (rawDiff + 180);
      const cErr = (hDiff * 3600) / 2;
      const dDiff = Math.abs((d1 + d2) - dTot) * 1000;
      const isPass = Math.abs(vErr) <= 10 && Math.abs(cErr) <= 10 && dDiff <= 3.0;
      return {
        vErr: (vErr >= 0 ? "+" : "") + vErr.toFixed(1) + ' "' + (Math.abs(vErr) <= 10 ? " (PASS <= 10\")" : " (FAIL > 10\")"),
        cErr: (cErr >= 0 ? "+" : "") + cErr.toFixed(1) + ' "' + (Math.abs(cErr) <= 10 ? " (PASS <= 10\")" : " (FAIL > 10\")"),
        distErr: dDiff.toFixed(1) + " mm" + (dDiff <= 3.0 ? " (PASS <= 3.0 mm)" : " (FAIL > 3.0 mm)"),
        isoStatus: isPass ? "ผ่านเกณฑ์มาตรฐาน ISO 17123-5 ทุกรายการ (PASSED)" : "ไม่ผ่านเกณฑ์บางรายการ - ต้องนำกล้องเข้าศูนย์ปรับแต่งแกนเล็ง"
      };
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { categoriesData, translations, surveyToolsData };
}
