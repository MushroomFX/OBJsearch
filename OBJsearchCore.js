$.t("OBJsjearch")[0].innerHTML = `<input placeholder="Seach here" onChange="OBJ.update(this.value);" type="text"/>`

var OBJ = {
    update: function(searchIndex){
        function pad(num, size) {
            num = num.toString();
            while (num.length < size) num = num + " ";
            return num;
        }
        function getDIff(str1,str2) {
            for(i=0;i<length;i++){
                if(str1[i]!==str2[i]){
                    return i
                }
                return 0
            }
        }
        var elems = $.c("searchable")

        var OLD = $.t("OBJsjearch")[0].value
        var NEW = searchIndex
        $.t("OBJsjearch")[0].value = searchIndex
        if(OLD==undefined){
            OLD = NEW
        }
        var length = Math.max(OLD.length,NEW.length)
        

        var NEW_pad = pad(NEW, length)
        var OLD_pad = pad(OLD, length)
        var offset = getDIff(NEW_pad,OLD_pad)
        offset*1
        // console.log(getDIff(NEW_pad,OLD_pad),NEW,OLD,NEW_pad,OLD_pad)

        for(i=0;i<length;i++){
            console.log(getDIff(NEW_pad,OLD_pad),"/",i,length)
            console.log(i+offset)
        }

        return
    },
    init: function(){
        var elems = $.c("searchable")
        for(i=0;i<elems.length; i++){
            elems[i].setAttribute("indexStop","0")
        }
    }
}
OBJ.init()





































































































































