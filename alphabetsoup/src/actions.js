var num_fields = 0;
$('#first_name').change(function() {
  alert( "Handler for .change() called." );
});
/*
var words = ['tomato basil', 'french onion', 'split pea', 'chicken noodle'];

//console.log(num);
function rand_word(words){
  var num = Math.floor(Math.random() * words.length);
  return words[num];
}
function scramble(word){
  var before = word;
  var letters = word.split('');
  
  for(var i = 0; i < letters.length; i++){
    //swap(letters[i], letters[Math.floor(Math.random() * letters.length)], letters);
    //console.log(letters);
    //console.log('a: '+a+' b: '+b);
    var temp;
    var rand_elem = Math.floor(Math.random()*letters.length);
    temp = letters[i];
    letters[i] = letters[rand_elem];
    letters[rand_elem] = temp;
    word = letters.join(''); 
    if(before == word) {
      scramble(word);
    } else {
      return word;      
    };
  }
  
}
var random_word = rand_word(words);
var num_words = random_word.split(' ');
var word_holder = [];
for(var i = 0; i < num_words.length; i++){
  
  word_holder[i] = scramble(num_words[i]);

}
var scrambled_word = '';
for(var j = 0; j<word_holder.length; j++){
  if(j == word_holder.length-1) scrambled_word+=word_holder[j];
  else scrambled_word += word_holder[j] + ' ';
}
console.log('sick: '+scrambled_word);

*/