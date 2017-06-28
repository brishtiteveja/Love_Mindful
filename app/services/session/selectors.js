import store from '../../components/store';

export const get = () => store.getState().services.session;
