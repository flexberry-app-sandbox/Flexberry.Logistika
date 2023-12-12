import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДокРаспр: DS.attr('number'),
  докумПостав: DS.belongsTo('i-i-s-logistika-докум-постав', { inverse: null, async: false }),
  пунктПогрузки: DS.belongsTo('i-i-s-logistika-пункт-погрузки', { inverse: null, async: false }),
  списокБарж: DS.belongsTo('i-i-s-logistika-список-барж', { inverse: null, async: false }),
  списокКонтей: DS.belongsTo('i-i-s-logistika-список-контей', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-logistika-формир-распред.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДокРаспр: {
    descriptionKey: 'models.i-i-s-logistika-формир-распред.validations.номерДокРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  докумПостав: {
    descriptionKey: 'models.i-i-s-logistika-формир-распред.validations.докумПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пунктПогрузки: {
    descriptionKey: 'models.i-i-s-logistika-формир-распред.validations.пунктПогрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокБарж: {
    descriptionKey: 'models.i-i-s-logistika-формир-распред.validations.списокБарж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокКонтей: {
    descriptionKey: 'models.i-i-s-logistika-формир-распред.validations.списокКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРаспредE', 'i-i-s-logistika-формир-распред', {
    номерДокРаспр: attr('Номер док распр', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    докумПостав: belongsTo('i-i-s-logistika-докум-постав', 'Докум постав', {
      дата: attr('Дата', { index: 3, hidden: true }),
      клиенты: belongsTo('i-i-s-logistika-клиенты', '', {
        адресПостав: attr('', { index: 10 }),
        наимЗаказ: attr('', { index: 11 }),
        телефон: attr('', { index: 12 })
      }, { index: -1, hidden: true })
    }, { index: 2, displayMemberPath: 'дата' }),
    пунктПогрузки: belongsTo('i-i-s-logistika-пункт-погрузки', 'Пункт погрузки', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' }),
    списокБарж: belongsTo('i-i-s-logistika-список-барж', 'Список барж', {
      производитель: attr('Производитель', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'производитель' }),
    списокКонтей: belongsTo('i-i-s-logistika-список-контей', 'Список контей', {
      наимКонт: attr('Наим конт', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наимКонт' })
  });

  modelClass.defineProjection('ФормирРаспредL', 'i-i-s-logistika-формир-распред', {
    номерДокРаспр: attr('Номер док распр', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    докумПостав: belongsTo('i-i-s-logistika-докум-постав', 'Дата', {
      дата: attr('Дата', { index: 2 }),
      клиенты: belongsTo('i-i-s-logistika-клиенты', '', {
        адресПостав: attr('', { index: 6 }),
        телефон: attr('', { index: 7 }),
        наимЗаказ: attr('', { index: 8 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    пунктПогрузки: belongsTo('i-i-s-logistika-пункт-погрузки', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true }),
    списокБарж: belongsTo('i-i-s-logistika-список-барж', 'Производитель', {
      производитель: attr('Производитель', { index: 4 })
    }, { index: -1, hidden: true }),
    списокКонтей: belongsTo('i-i-s-logistika-список-контей', 'Наим конт', {
      наимКонт: attr('Наим конт', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
