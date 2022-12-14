class Book{
    constructor(title,description,author){
        this.title = title;
        this.description = description;
        this.author = author;

    }
    introduce = () => {
        console.log('(this.title) and (this.description) and (this.author)');
    }
}
class Library extends Book{
    constructor( )
}