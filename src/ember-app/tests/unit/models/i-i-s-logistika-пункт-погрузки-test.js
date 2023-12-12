import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-logistika-пункт-погрузки', 'Unit | Model | i-i-s-logistika-пункт-погрузки', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-logistika-докум-постав',
    'model:i-i-s-logistika-клиенты',
    'model:i-i-s-logistika-организация',
    'model:i-i-s-logistika-пункт-погрузки',
    'model:i-i-s-logistika-список-барж',
    'model:i-i-s-logistika-список-контей',
    'model:i-i-s-logistika-т-ч-инф-о-зак',
    'model:i-i-s-logistika-товары',
    'model:i-i-s-logistika-формир-распред',
    'model:i-i-s-logistika-формир-рез-пос',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
