import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISLogistikaДокумПоставLForm from './forms/i-i-s-logistika-докум-постав-l';
import IISLogistikaКлиентыLForm from './forms/i-i-s-logistika-клиенты-l';
import IISLogistikaОрганизацияLForm from './forms/i-i-s-logistika-организация-l';
import IISLogistikaПунктПогрузкиLForm from './forms/i-i-s-logistika-пункт-погрузки-l';
import IISLogistikaСписокБаржLForm from './forms/i-i-s-logistika-список-барж-l';
import IISLogistikaСписокКонтейLForm from './forms/i-i-s-logistika-список-контей-l';
import IISLogistikaТоварыLForm from './forms/i-i-s-logistika-товары-l';
import IISLogistikaФормирРаспредLForm from './forms/i-i-s-logistika-формир-распред-l';
import IISLogistikaФормирРезПосLForm from './forms/i-i-s-logistika-формир-рез-пос-l';
import IISLogistikaДокумПоставEForm from './forms/i-i-s-logistika-докум-постав-e';
import IISLogistikaКлиентыEForm from './forms/i-i-s-logistika-клиенты-e';
import IISLogistikaОрганизацияEForm from './forms/i-i-s-logistika-организация-e';
import IISLogistikaПунктПогрузкиEForm from './forms/i-i-s-logistika-пункт-погрузки-e';
import IISLogistikaСписокБаржEForm from './forms/i-i-s-logistika-список-барж-e';
import IISLogistikaСписокКонтейEForm from './forms/i-i-s-logistika-список-контей-e';
import IISLogistikaТоварыEForm from './forms/i-i-s-logistika-товары-e';
import IISLogistikaФормирРаспредEForm from './forms/i-i-s-logistika-формир-распред-e';
import IISLogistikaФормирРезПосEForm from './forms/i-i-s-logistika-формир-рез-пос-e';
import IISLogistikaДокумПоставModel from './models/i-i-s-logistika-докум-постав';
import IISLogistikaКлиентыModel from './models/i-i-s-logistika-клиенты';
import IISLogistikaОрганизацияModel from './models/i-i-s-logistika-организация';
import IISLogistikaПунктПогрузкиModel from './models/i-i-s-logistika-пункт-погрузки';
import IISLogistikaСписокБаржModel from './models/i-i-s-logistika-список-барж';
import IISLogistikaСписокКонтейModel from './models/i-i-s-logistika-список-контей';
import IISLogistikaТЧИнфОЗакModel from './models/i-i-s-logistika-т-ч-инф-о-зак';
import IISLogistikaТоварыModel from './models/i-i-s-logistika-товары';
import IISLogistikaФормирРаспредModel from './models/i-i-s-logistika-формир-распред';
import IISLogistikaФормирРезПосModel from './models/i-i-s-logistika-формир-рез-пос';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-logistika-докум-постав': IISLogistikaДокумПоставModel,
    'i-i-s-logistika-клиенты': IISLogistikaКлиентыModel,
    'i-i-s-logistika-организация': IISLogistikaОрганизацияModel,
    'i-i-s-logistika-пункт-погрузки': IISLogistikaПунктПогрузкиModel,
    'i-i-s-logistika-список-барж': IISLogistikaСписокБаржModel,
    'i-i-s-logistika-список-контей': IISLogistikaСписокКонтейModel,
    'i-i-s-logistika-т-ч-инф-о-зак': IISLogistikaТЧИнфОЗакModel,
    'i-i-s-logistika-товары': IISLogistikaТоварыModel,
    'i-i-s-logistika-формир-распред': IISLogistikaФормирРаспредModel,
    'i-i-s-logistika-формир-рез-пос': IISLogistikaФормирРезПосModel
  },

  'application-name': 'Logistika',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Logistika',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Logistika',
          title: 'Logistika'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        logistika: {
          caption: 'Logistika',
          title: 'Logistika',
          'i-i-s-logistika-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-logistika-список-барж-l': {
            caption: 'Список барж',
            title: ''
          },
          'i-i-s-logistika-формир-рез-пос-l': {
            caption: 'Формир рез пос',
            title: ''
          },
          'i-i-s-logistika-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-logistika-пункт-погрузки-l': {
            caption: 'Пункт погрузки',
            title: ''
          },
          'i-i-s-logistika-докум-постав-l': {
            caption: 'Докум постав',
            title: ''
          },
          'i-i-s-logistika-список-контей-l': {
            caption: 'Список контей',
            title: ''
          },
          'i-i-s-logistika-формир-распред-l': {
            caption: 'Формир распред',
            title: ''
          },
          'i-i-s-logistika-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-logistika-докум-постав-l': IISLogistikaДокумПоставLForm,
    'i-i-s-logistika-клиенты-l': IISLogistikaКлиентыLForm,
    'i-i-s-logistika-организация-l': IISLogistikaОрганизацияLForm,
    'i-i-s-logistika-пункт-погрузки-l': IISLogistikaПунктПогрузкиLForm,
    'i-i-s-logistika-список-барж-l': IISLogistikaСписокБаржLForm,
    'i-i-s-logistika-список-контей-l': IISLogistikaСписокКонтейLForm,
    'i-i-s-logistika-товары-l': IISLogistikaТоварыLForm,
    'i-i-s-logistika-формир-распред-l': IISLogistikaФормирРаспредLForm,
    'i-i-s-logistika-формир-рез-пос-l': IISLogistikaФормирРезПосLForm,
    'i-i-s-logistika-докум-постав-e': IISLogistikaДокумПоставEForm,
    'i-i-s-logistika-клиенты-e': IISLogistikaКлиентыEForm,
    'i-i-s-logistika-организация-e': IISLogistikaОрганизацияEForm,
    'i-i-s-logistika-пункт-погрузки-e': IISLogistikaПунктПогрузкиEForm,
    'i-i-s-logistika-список-барж-e': IISLogistikaСписокБаржEForm,
    'i-i-s-logistika-список-контей-e': IISLogistikaСписокКонтейEForm,
    'i-i-s-logistika-товары-e': IISLogistikaТоварыEForm,
    'i-i-s-logistika-формир-распред-e': IISLogistikaФормирРаспредEForm,
    'i-i-s-logistika-формир-рез-пос-e': IISLogistikaФормирРезПосEForm
  },

});

export default translations;
