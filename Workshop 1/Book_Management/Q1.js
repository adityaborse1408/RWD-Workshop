// function Book(Id,title,author,pages){
//     this.bookId= Id;
//     this.title=title;
//     this.author=author;
//     this.pages=pages; 
// }
// let bookForm = document.getElementById('newform');

 var x = document.getElementById("a1");
 
 var arr = [];

//  class Display{
//      add(arr){
//          let tableBody = document.getElementById("x");
//          let string = `<tr>
//                            <td>${arr.name}</td> 
//                            <td>${arr.id}</td>
//                            <td>${arr.author}</td>
//                            <td>${arr.pages}</td>` ;
//                            x.innerHTML+=string;
//      }
    
//  }
     function add(){
         x.innerHTML = `<div>Book id: <input type ="number" id="id" placeholder="Enter Book Id"></div>`+
                        `<div>Title: <input type ="text" id="name" placeholder="Enter Book Title"></div>`+
                        `<div>Author: <input type ="text" id="author" placeholder="Enter Book Author"></div>`+
                        `<div>Number of Pages: <input type ="number" id="pages" placeholder="Enter Pages"></div>`+
                        ` <button onclick="booksave()">SUBMIT</button>`
         
     }

     function booksave(){
            name1 = document.getElementById("name").value;
            id1=    document.getElementById("id").value;
            author1= document.getElementById("author").value;
            pages1= document.getElementById("pages").value;
            var arr2 = {name:name1,id:id1,author:author1,pages:pages1};
            arr.push(arr2);
            console.log(name1,id1,author1,pages1);
     }

     function allBooks(){
         arr.forEach(arr2=>{
             console.log(arr2.name+" "+arr2.id+" "+arr2.author+" "+arr2.pages);
         });
     }

     function remove(){
         x.innerHTML = "Removing Books Here..."
     }

     function edit(){
         x.innerHTML = "Editing Books Here..."
     }
     function Display(){

     }
     Display.prototype.add = function (book){
        let tableBody = document.getElementById("tableBody");
                console.log("adding");
         let string = `<tr>
                           <td>${arr.name}</td> 
                           <td>${arr.id}</td>
                           <td>${arr.author}</td>
                           <td>${arr.pages}</td>` ;
                           tableBody.innerHTML+=string;
        
     }
     function show(){
         x.innerHTML = `<div id="table">
            <h1>Your books</h1>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Type</th>
                    </tr>
                </thead>
                <tbody id='tableBody'></tbody>
            </table>
        </div>`
        
                
        
     }