import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-logistika-докум-постав-l');
  this.route('i-i-s-logistika-докум-постав-e',
  { path: 'i-i-s-logistika-докум-постав-e/:id' });
  this.route('i-i-s-logistika-докум-постав-e.new',
  { path: 'i-i-s-logistika-докум-постав-e/new' });
  this.route('i-i-s-logistika-клиенты-l');
  this.route('i-i-s-logistika-клиенты-e',
  { path: 'i-i-s-logistika-клиенты-e/:id' });
  this.route('i-i-s-logistika-клиенты-e.new',
  { path: 'i-i-s-logistika-клиенты-e/new' });
  this.route('i-i-s-logistika-организация-l');
  this.route('i-i-s-logistika-организация-e',
  { path: 'i-i-s-logistika-организация-e/:id' });
  this.route('i-i-s-logistika-организация-e.new',
  { path: 'i-i-s-logistika-организация-e/new' });
  this.route('i-i-s-logistika-пункт-погрузки-l');
  this.route('i-i-s-logistika-пункт-погрузки-e',
  { path: 'i-i-s-logistika-пункт-погрузки-e/:id' });
  this.route('i-i-s-logistika-пункт-погрузки-e.new',
  { path: 'i-i-s-logistika-пункт-погрузки-e/new' });
  this.route('i-i-s-logistika-список-барж-l');
  this.route('i-i-s-logistika-список-барж-e',
  { path: 'i-i-s-logistika-список-барж-e/:id' });
  this.route('i-i-s-logistika-список-барж-e.new',
  { path: 'i-i-s-logistika-список-барж-e/new' });
  this.route('i-i-s-logistika-список-контей-l');
  this.route('i-i-s-logistika-список-контей-e',
  { path: 'i-i-s-logistika-список-контей-e/:id' });
  this.route('i-i-s-logistika-список-контей-e.new',
  { path: 'i-i-s-logistika-список-контей-e/new' });
  this.route('i-i-s-logistika-товары-l');
  this.route('i-i-s-logistika-товары-e',
  { path: 'i-i-s-logistika-товары-e/:id' });
  this.route('i-i-s-logistika-товары-e.new',
  { path: 'i-i-s-logistika-товары-e/new' });
  this.route('i-i-s-logistika-формир-распред-l');
  this.route('i-i-s-logistika-формир-распред-e',
  { path: 'i-i-s-logistika-формир-распред-e/:id' });
  this.route('i-i-s-logistika-формир-распред-e.new',
  { path: 'i-i-s-logistika-формир-распред-e/new' });
  this.route('i-i-s-logistika-формир-рез-пос-l');
  this.route('i-i-s-logistika-формир-рез-пос-e',
  { path: 'i-i-s-logistika-формир-рез-пос-e/:id' });
  this.route('i-i-s-logistika-формир-рез-пос-e.new',
  { path: 'i-i-s-logistika-формир-рез-пос-e/new' });
});

export default Router;
