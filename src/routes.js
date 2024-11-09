import { addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } from "./handler.js";

const routes = [
  {
    // menyimpan buku
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    // menampilkan seluruh buku
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    // menampilkan detail buku
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdHandler,
  },
  {
    // mengubah data buku
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookByIdHandler,
  },
  {
    // menghapus buku
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByIdHandler,
  }
];

export default routes;