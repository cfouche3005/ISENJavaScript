function sumTest() {
    console.log(sum([]) );
    console.log(sum([42,404,1337]) );
}
function longuestWordTest() {
    console.log( longuestWord(["lot", "of", "words", "of", "different", "sizes"]) );
}
function rangeTest(){
    console.log( range(3, 8, 1) );
    console.log( range(40, 90, 20) );
}
function nbOccurencesTest(){
    let text = "bar qux baz foo bar foo qux foo";
    console.log(nbOccurences(text, "foo"));
    console.log(nbOccurences(text, "quux"));
    console.log(nbOccurences(text, "baz"));

}