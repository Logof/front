import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { ElMessage } from 'element-plus';

export default function useLocale() {
  const i18 = useI18n();
  const currentLocale = computed(() => {
    return i18.locale.value;
  });
  const changeLocale = (value: string) => {
    if (i18.locale.value === value) {
      return;
    }
    i18.locale.value = value;
    localStorage.setItem('arco-locale', value);
    ElMessage({ message: i18.t('navbar.action.locale'), type: 'success' });
  };
  return {
    currentLocale,
    changeLocale,
  };
}