import React, { useState, useCallback } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  postMediaLink,
  toggleAddLinkMode,
} from "../../store/mediaLinks/actions";
import { selectAllLinks } from "../../store/mediaLinks/selectors";

export default function AddLinkForm(linkMode: Function) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [link, setLink] = useState("");
  const [imgLink, setImgLink] = useState("");

  const mediaLinks = useSelector(selectAllLinks);
  const dispatch = useDispatch();
  //@ts-ignore
  const imgLinks = mediaLinks.map((link) => {
    return link.imgLink;
  });
  //@ts-ignore
  const filteredLinks = [...new Set(imgLinks)];

  const submitForm = () => {
    dispatch(postMediaLink(title, description, tag, link, imgLink));
    setTitle("");
    setDescription("");
    setTag("");
    setLink("");
    setImgLink("");
  };

  const close = () => {
    dispatch(toggleAddLinkMode());
  };

  return (
    <div>
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h1 className="mt-5 mb-5">Link toevoegen</h1>
          <Form.Group>
            <Form.Label>Titel</Form.Label>
            <Form.Control
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              type="title"
              placeholder="Titel"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Beschrijving</Form.Label>
            <Form.Control
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="description"
              placeholder="Beschrijving"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Tag</Form.Label>
            <Form.Control
              value={tag}
              onChange={(event) => setTag(event.target.value)}
              type="tag"
              placeholder="Tag"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>URL</Form.Label>
            <Form.Control
              value={link}
              onChange={(event) => setLink(event.target.value)}
              type="url"
              placeholder="url"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Afbeelding</Form.Label>
            <Form.Control
              as="select"
              value={imgLink}
              onChange={(event) => setImgLink(event.target.value)}
              type="img"
              placeholder="Afbeelding"
              required
            >
              <option value="" disabled>
                Afbeelding
              </option>
              {filteredLinks.map((filteredLink, index) => {
                return <option key={index}>{filteredLink}</option>;
              })}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Opslaan
            </Button>
            <Button variant="primary" type="submit" onClick={close}>
              Sluiten
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
