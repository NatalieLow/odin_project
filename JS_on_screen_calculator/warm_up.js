var myMax = function(array){
    var max = null;
    for(i = 0; i < array.length; i++){
        if(max === null){
            max = array[i];
        }
        else if(array[i] > max){
           max = array[i];
        }
    }
    return max;
}



var vowel_count = function(string){
    var num_vowels = 0;
    var vowels = ["a", "e", "i", "o", "u", "y"];
    string = string.toLowerCase();

    for(var vowel_index in vowels){
        for(var letter in string){
            if(string[letter] === vowels[vowel_index]){
                num_vowels += 1;
            }
        }
    }

    return num_vowels;
}

var reverse = function(string){
    var rev_str = "";

    for(i = string.length - 1; i >= 0; i --){
        rev_str += string[i];
    }

    return rev_str;
}