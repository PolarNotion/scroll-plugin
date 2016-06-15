(function ($) {
  module('jQuery#scrollmptious', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.scrollmptious(), this.elems, 'should be chainable');
  });

}(jQuery));
