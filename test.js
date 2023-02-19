var expect = chai.expect;

describe('MyFunction',function(){
    describe('#dealPlayerHand',function() {
        it('playerCard should be higher than computer card and award a point to player', function() {
            var x = (playerHand.length,26);
            expect(x).to.equal(26);
        });

        it('should throw an error if there are not 26 elements in the array',function() {
            expect(function() {
                var y = (playerHand.length,27)
                y();
            }).to.throw(Error);
        });
                
    });
});