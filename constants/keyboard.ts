export const KEYBOARD_LAYOUT = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { label: 'English', value: 'en' }, // 全球通用
  { label: '中文', value: 'zh' }, // 中文
  { label: 'Español', value: 'es' }, // 拉丁美洲和西班牙
  { label: 'العربية', value: 'ar' }, // 中东和北非
  { label: 'Hindi', value: 'hi' }, // 印度
  { label: 'Português', value: 'pt' }, // 巴西和葡萄牙
  { label: '日本語', value: 'ja' }, // 日本
  { label: '한국어', value: 'ko' }, // 韩国
  { label: 'ไทย', value: 'th' }, // 泰国
  { label: 'Bahasa Indonesia', value: 'id' }, // 印尼
  { label: 'Tiếng Việt', value: 'vi' }, // 越南
  { label: 'Bahasa Melayu', value: 'ms' } // 马来西亚
]

// supported languages
export const SUPPORTED_LANGUAGES = LANGUAGE_OPTIONS.map(
  (option) => option.value
)
