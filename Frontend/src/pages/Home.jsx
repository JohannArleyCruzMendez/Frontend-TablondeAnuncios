import axios from "axios";
import React, { useCallback, useEffect, useState } from 'react';
import Swal from "sweetalert2";
import ModalAction from "../Components/ModalAction";
import SearchBar from "../Components/SearchBar";
import Pagination from "../Components/Pagination";
import NavigationBar from "../Components/NavbarComponent";  // Importar NavigationBar

export const Home = () => {
  // State for storing posts data
  const [posts, setPosts] = useState([]);
  
  // State for handling loading spinner
  const [isLoading, setIsLoading] = useState(true);
  
  // State for handling modal visibility
  const [show, setShow] = useState(false);

  // Handling edit modal 
  const [isEdit, setIsEdit] = useState(false);

  // State to save the post selected
  const [currentPost, setCurrentPost] = useState({});

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6); // Number of posts per page

  // Functions to handle modal open/close
  const handleClose = () => {
    setShow(false);
    setIsEdit(false);
    setCurrentPost({});
  };
  const handleShow = () => setShow(true);

  // Fetch posts data from the server
  const getPost = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("http://localhost:8080/posts");
      console.log(data.data);
      setPosts(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  }, []);

  // useEffect to fetch posts data when component mounts
  useEffect(() => {
    getPost();
  }, [getPost]);

  // Function to handle post deletion
  const deletePost = async (id) => {
    try {
      const { data } = await axios.delete(`http://localhost:8080/posts/${id}`);
      console.log(data);
      await getPost();
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.log("error in deletePost", error.message);
    }
  };

  // Function to handle post creation or update
  const handleSave = async (post) => {
    try {
      if (isEdit) {
        const { data } = await axios.put(`http://localhost:8080/posts/${post.id}`, post);
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Publicación actualizada exitosamente",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        const { data } = await axios.post("http://localhost:8080/posts", post);
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Publicación creada exitosamente",
          showConfirmButton: false,
          timer: 1500
        });
      }
      await getPost();
      handleClose();
    } catch (error) {
      console.log("error in handleSave", error.message);
    }
  };

  const selectPost = (post) => {
    setIsEdit(true);
    setCurrentPost(post);
    handleShow();
  };

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <NavigationBar /> {/* Componente Navbar */}
      <div className="container mt-5">
        <div className="d-flex justify-content-center mb-5">
          {/* Botón para mostrar el modal */}
          <i className="btn btn-dark fa-solid fa-plus fa-3x" onClick={handleShow}></i>
        </div>

        {/* Componente de búsqueda */}
        <SearchBar searchTerm={searchTerm} handleSearch={setSearchTerm} />

        {/* Spinner de carga o listado de publicaciones */}
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <i className="fas fa-spin fa-solid fa-rotate fa-10x"></i>
          </div>
        ) : (
          <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {currentPosts.map((post) => (
                <div className="col" key={post.id}>
                  <div className="card">
                    <img src={post.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.description}</p>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex justify-content-between">
                        {/* Botón para eliminar publicación */}
                        <i
                          className="btn btn-danger fa-solid fa-trash"
                          onClick={() => deletePost(post.id)}
                        >
                          eliminar
                        </i>
                        {/* Botón para editar publicación */}
                        <i 
                          className="btn btn-info fa-regular fa-pen-to-square"
                          onClick={() => selectPost(post)}
                        >
                          editar
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              handlePageChange={handlePageChange} 
            />
          </>
        )}
        {/* Modal para crear nueva publicación */}
        <ModalAction 
          show={show} 
          handleClose={handleClose} 
          handleSave={handleSave}
          isEdit={isEdit} 
          post={currentPost}
        />
      </div>
    </div>
  );
};

export default Home;
