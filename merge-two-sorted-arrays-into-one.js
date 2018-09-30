//var arr1 = [1, 3, 5, 7, 9, 11, 12];
//var arr2 = [1, 2, 3, 4, 5, 10, 12];

function mergeArrays(arr1, arr2) {
  
    //concaténation des deux listes
    var mergeArrays = arr1.concat(arr2);
    
    //rangement par ordre croissant de la liste obtenue
    mergeArrays.sort(function(a, b) {
      return a - b;
    });
    
    //suppression des doublons de cette liste
    var newArray = [];
    for (var i = 0; i < mergeArrays.length; i++) {
      if (mergeArrays[i] != mergeArrays[i + 1]) {
        newArray.push(mergeArrays[i]);
      }
    }
    
    return(newArray);
    }
    