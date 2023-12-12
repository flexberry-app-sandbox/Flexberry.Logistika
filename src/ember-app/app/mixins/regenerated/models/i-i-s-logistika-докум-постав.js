import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДог: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-logistika-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-logistika-организация', { inverse: null, async: false }),
  тЧИнфОЗак: DS.hasMany('i-i-s-logistika-т-ч-инф-о-зак', { inverse: 'докумПостав', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-logistika-докум-постав.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДог: {
    descriptionKey: 'models.i-i-s-logistika-докум-постав.validations.номерДог.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-logistika-докум-постав.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-logistika-докум-постав.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧИнфОЗак: {
    descriptionKey: 'models.i-i-s-logistika-докум-постав.validations.тЧИнфОЗак.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумПоставE', 'i-i-s-logistika-докум-постав', {
    дата: attr('Дата', { index: 0 }),
    номерДог: attr('Номер дог', { index: 1 }),
    организация: belongsTo('i-i-s-logistika-организация', 'Организация', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    клиенты: belongsTo('i-i-s-logistika-клиенты', 'Клиенты', {
      наимЗаказ: attr('Наим заказ', { index: 5, hidden: true }),
      адресПостав: attr('Адрес поставки', { index: 6 }),
      телефон: attr('Телефон', { index: 7 })
    }, { index: 4, displayMemberPath: 'наимЗаказ' }),
    тЧИнфОЗак: hasMany('i-i-s-logistika-т-ч-инф-о-зак', 'Т ч инф о зак', {
      количество: attr('Количество', { index: 0 }),
      товары: belongsTo('i-i-s-logistika-товары', 'Товары', {
        наимТовара: attr('Наим товара', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наимТовара' })
    })
  });

  modelClass.defineProjection('ДокумПоставL', 'i-i-s-logistika-докум-постав', {
    дата: attr('Дата', { index: 0 }),
    номерДог: attr('Номер дог', { index: 1 }),
    организация: belongsTo('i-i-s-logistika-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-logistika-клиенты', 'Наим заказ', {
      наимЗаказ: attr('Наим заказ', { index: 3 }),
      адресПостав: attr('Адрес поставки', { index: 4 }),
      телефон: attr('Телефон', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
