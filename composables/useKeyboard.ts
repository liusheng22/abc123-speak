import { KEYBOARD_LAYOUT } from '~/constants/keyboard'

export const useKeyboard = (onKeyTrigger?: (key: string) => void) => {
  const pressedKey = ref<string | null>(null)

  const isValidKey = (key: string) => {
    return KEYBOARD_LAYOUT.some((row) => row.includes(key))
  }

  const preventDefaultKeys = (event: KeyboardEvent) => {
    const keysToPrevent = [
      // function keys
      'F1',
      'F2',
      'F3',
      'F4',
      'F5',
      'F6',
      'F7',
      'F8',
      'F9',
      'F10',
      'F11',
      'F12',
      // special keys
      'Tab',
      'CapsLock',
      'Shift',
      'Control',
      'Alt',
      'Meta',
      'ContextMenu',
      'PrintScreen',
      'ScrollLock',
      'Pause',
      'Insert',
      'Delete',
      'Home',
      'End',
      'PageUp',
      'PageDown',
      // direction keys
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      // other
      'Escape',
      'NumLock'
    ]

    // prevent default for certain keys
    if (
      keysToPrevent.includes(event.key) ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey
    ) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.repeat) {
      return
    }
    if (event.ctrlKey || event.metaKey || event.altKey) {
      return
    }

    const key = event.key.toUpperCase()
    if (isValidKey(key)) {
      event.preventDefault()
      pressedKey.value = key
      onKeyTrigger?.(key)
      return key
    }
  }

  const handleKeyUp = () => {
    pressedKey.value = null
  }

  const handleKeyClick = (key: string) => {
    pressedKey.value = key
    // trigger callback function
    onKeyTrigger?.(key)
    setTimeout(() => {
      pressedKey.value = null
    }, 200)
  }

  onMounted(() => {
    window.addEventListener('keydown', preventDefaultKeys, true)
    window.addEventListener('keydown', handleKeyPress)
    window.addEventListener('keyup', handleKeyUp)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', preventDefaultKeys, true)
    window.removeEventListener('keydown', handleKeyPress)
    window.removeEventListener('keyup', handleKeyUp)
  })

  return {
    pressedKey,
    handleKeyClick
  }
}
