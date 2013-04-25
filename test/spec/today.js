require(['today'], function(){
    describe('Today print', function() {
      var date = {}, today;
      beforeEach(function() {
         date.today = new Date(2012, 3, 30);
         today = testr('today', {'date': date});
      });

      it('is user-friendly', function() {
         expect(today.getDateString()).toBe('Today is Monday, 30th April, 2012');
      });
    });
});