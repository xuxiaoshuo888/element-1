import ElTreeSelect from './src/tree-select';

/* istanbul ignore next */
ElTreeSelect.install = function(Vue) {
  Vue.component(ElTreeSelect.name, ElTreeSelect);
};

export default ElTreeSelect;
