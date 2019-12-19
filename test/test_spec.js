describe('Super Hero Page', function(){
    it('should load the correct URL', function(){
        browser.ignoreSynchronization = true
        browser.get('file:///C:/protractor/superhero/index.html')
    
        browser.sleep(5000 )
    })
    
    }) 