from firebase import firebase
firebase = firebase.FirebaseApplication('https://folkloric-grid-211922.firebaseio.com/')
correct_spell = firebase.get('/unscrambledcorrect', None)


def check(guessed_spell):
    if correct_spell == guessed_spell:
        return 1;
    else:
        return 0;


check(input('enter a guess: '))




