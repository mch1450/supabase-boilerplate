import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0";

const supabaseUrl = "https://fuvqupnrmsbkporizgfi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1dnF1cG5ybXNia3Bvcml6Z2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxMTU1NTAsImV4cCI6MTk5MjY5MTU1MH0.PQsTI0tPbOK0mbkD_bM-oGLSARYIvPlq9FkUPeTUSsk";
const supabase = createClient(supabaseUrl, supabaseKey);

async function getBooks() {
  let { data: books, error } = await supabase
  .from("books")
  .select("*");

  for (let book of books) {
    let bookList = document.getElementById("books");
    bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td></tr>`;
  }
  
}

getBooks();
