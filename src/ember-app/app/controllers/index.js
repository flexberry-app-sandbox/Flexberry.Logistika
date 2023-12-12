import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.logistika.caption'),
          title: i18n.t('forms.application.sitemap.logistika.title'),
          children: [{
            link: 'i-i-s-logistika-организация-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-организация-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-logistika-список-барж-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-список-барж-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-список-барж-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-logistika-формир-рез-пос-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-формир-рез-пос-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-формир-рез-пос-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-logistika-товары-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-товары-l.title'),
            children: null
          }, {
            link: 'i-i-s-logistika-пункт-погрузки-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-пункт-погрузки-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-пункт-погрузки-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-logistika-докум-постав-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-докум-постав-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-докум-постав-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-logistika-список-контей-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-список-контей-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-список-контей-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-logistika-формир-распред-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-формир-распред-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-формир-распред-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-logistika-клиенты-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-клиенты-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})