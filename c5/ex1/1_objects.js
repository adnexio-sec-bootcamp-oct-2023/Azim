var book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,

    printDetails: function() {
        console.log("Title: " + this.title);
        console.log("Author: " + this.author);
        console.log("Year: " + this.year);
        var currentYear = new Date().getFullYear();
        //console.log(currentYear);
        var age = currentYear - this.year;
        console.log("Age: " + age + " years");
    },
};

book.printDetails();
