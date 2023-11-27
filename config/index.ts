import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'KDCDDM Chatbot',
  description: 'Paper Reading Assistant Chatbot: KDCDDM',
  copyright: 'Yuanfu Yang',
  privacy_policy: 'We respect your privacy and are committed to protecting any information you share with us. Our Chatbot may collect certain personal and non-personal information to enhance your experience and improve our services. We do not sell or rent your information to others. Any changes to this policy will be updated here. By using our Chatbot, you agree to this policy.',
  default_language: 'en',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a paper reading assistant of KDCDDM.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 500
