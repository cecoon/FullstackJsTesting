describe('loginpage', function() {
    it('should have Studentenleben as title', function(done) {
        browser
            .url('http://127.0.0.1:9001')
            .getTitle(function(err, title) {
                expect(title).toBe('Studentenleben');
            })
            .call(done);
    });
});