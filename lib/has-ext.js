(() => {
    'use strict';

    /**
     * Check if filename has a any extension
     * 
     * @param {String} filename
     * @return {Boolean} 
     */
    module.exports = filename => {
        let regex = /(\.[\w]{3}\w?)$/g;

        return regex.test(filename);
    };

})();