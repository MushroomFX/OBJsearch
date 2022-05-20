var $ = {
    i: function(i){
        var temp = document.getElementById(i);
        return temp
    },
    t: function(t){
        var temp = document.getElementsByTagName(t)
        return temp
    },
    c: function(c){
        var temp = document.getElementsByClassName(c)
        return temp
    },
    at: function(a,c){
        var temp = document.getElementsByClassName(c)
        return temp
    }
}