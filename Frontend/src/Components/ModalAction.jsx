import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const initialState = {
  title: "",
  description: "",
  imgURL: "",
};

const ModalAction = ({ show, handleClose, handleSave, isEdit, post }) => {
  const [formulario, setFormulario] = useState(initialState);

  useEffect(() => {
    if (isEdit && post) {
      setFormulario(post);
    } else {
      setFormulario(initialState);
    }
  }, [isEdit, post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formulario);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? "Editar Publicación" : "Nueva Publicación"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título"
              name="title"
              value={formulario.title}
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Descripción"
              name="description"
              value={formulario.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImgUrl">
            <Form.Label>URL de la Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL de la Imagen"
              name="imgURL"
              value={formulario.imgURL}
              onChange={handleChange}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

ModalAction.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  post: PropTypes.object,
};

export default ModalAction;
