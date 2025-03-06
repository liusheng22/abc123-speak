// languageCode: BCP 47 language tag
export const LANGUAGE_TO_BCP47: Record<string, string> = {
  zh: 'zh-CN', // 中文（中国大陆）
  en: 'en-US', // 英语（美国）
  es: 'es-ES', // 西班牙语（西班牙）
  fr: 'fr-FR', // 法语（法国）
  de: 'de-DE', // 德语（德国）
  it: 'it-IT', // 意大利语（意大利）
  ja: 'ja-JP', // 日语（日本）
  ko: 'ko-KR', // 韩语（韩国）
  pt: 'pt-BR', // 葡萄牙语（巴西）
  ru: 'ru-RU', // 俄语（俄罗斯）
  ar: 'ar-SA', // 阿拉伯语（沙特阿拉伯）
  hi: 'hi-IN', // 印地语（印度）
  tr: 'tr-TR', // 土耳其语（土耳其）
  nl: 'nl-NL', // 荷兰语（荷兰）
  pl: 'pl-PL', // 波兰语（波兰）
  sv: 'sv-SE', // 瑞典语（瑞典）
  da: 'da-DK', // 丹麦语（丹麦）
  fi: 'fi-FI', // 芬兰语（芬兰）
  no: 'no-NO', // 挪威语（挪威）
  cs: 'cs-CZ', // 捷克语（捷克共和国）
  hu: 'hu-HU', // 匈牙利语（匈牙利）
  el: 'el-GR', // 希腊语（希腊）
  he: 'he-IL', // 希伯来语（以色列）
  id: 'id-ID', // 印度尼西亚语（印度尼西亚）
  ms: 'ms-MY', // 马来语（马来西亚）
  th: 'th-TH', // 泰语（泰国）
  vi: 'vi-VN', // 越南语（越南）
  ro: 'ro-RO', // 罗马尼亚语（罗马尼亚）
  bg: 'bg-BG', // 保加利亚语（保加利亚）
  uk: 'uk-UA', // 乌克兰语（乌克兰）
  sk: 'sk-SK', // 斯洛伐克语（斯洛伐克）
  hr: 'hr-HR', // 克罗地亚语（克罗地亚）
  ca: 'ca-ES', // 加泰罗尼亚语（西班牙）
  fa: 'fa-IR', // 波斯语（伊朗）
  lt: 'lt-LT', // 立陶宛语（立陶宛）
  lv: 'lv-LV', // 拉脱维亚语（拉脱维亚）
  et: 'et-EE', // 爱沙尼亚语（爱沙尼亚）
  sl: 'sl-SI', // 斯洛文尼亚语（斯洛文尼亚）
  sr: 'sr-RS', // 塞尔维亚语（塞尔维亚）
  bn: 'bn-IN', // 孟加拉语（印度）
  ta: 'ta-IN', // 泰米尔语（印度）
  ml: 'ml-IN', // 马拉雅拉姆语（印度）
  te: 'te-IN', // 泰卢固语（印度）
  ur: 'ur-PK', // 乌尔都语（巴基斯坦）
  fil: 'fil-PH', // 菲律宾语（菲律宾）
  my: 'my-MM', // 缅甸语（缅甸）
  zh_TW: 'zh-TW', // 中文（台湾）
  zh_HK: 'zh-HK', // 中文（香港）
  en_GB: 'en-GB', // 英语（英国）
  en_AU: 'en-AU', // 英语（澳大利亚）
  en_CA: 'en-CA', // 英语（加拿大）
  es_MX: 'es-MX', // 西班牙语（墨西哥）
  fr_CA: 'fr-CA', // 法语（加拿大）
  pt_PT: 'pt-PT' // 葡萄牙语（葡萄牙）
}

// get BCP 47 tag for language code
export function getBCP47Tag(languageCode: string): string {
  return LANGUAGE_TO_BCP47[languageCode] || 'en-US'
}
