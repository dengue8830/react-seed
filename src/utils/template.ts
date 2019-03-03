interface IBloqueadorOptions {
  overlayColor?: string;
  state?: string;
  message?: string;
}

export const Template = {
  init: () => {
    window.mQuickSidebar.init();
    window.mApp.init({});
    window.mLayout.init();
  },
  initPopovers: () => {
    window.mApp.initPopovers();
  },
  blockPage: (options: IBloqueadorOptions = {}) => {
    window.mApp.blockPage({
      overlayColor: options.overlayColor || '#000000',
      state: options.state || 'primary',
      message: options.message || 'Cargando ...'
    });
  },
  unblockPage: () => {
    window.mApp.unblockPage();
  },
  block: (elementId: string, options: IBloqueadorOptions = {}) => {
    window.mApp.block(elementId, {
      overlayColor: options.overlayColor || '#000000',
      state: options.state || 'primary',
      message: options.message || 'Cargando ...'
    });
  },
  unblock: (elementId: string) => {
    window.mApp.unblock(elementId);
  }
}