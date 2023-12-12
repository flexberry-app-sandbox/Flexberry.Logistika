import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-logistika-пункт-погрузки', 'Unit | Serializer | i-i-s-logistika-пункт-погрузки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-logistika-пункт-погрузки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-logistika-ед-изм',
    'transform:i-i-s-logistika-статус-заказа',
    'transform:i-i-s-logistika-удовл-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
