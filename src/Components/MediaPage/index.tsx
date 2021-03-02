import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../index.module.scss";
import { fetchMediaLinks } from "../../store/mediaLinks/actions";
import { selectAllLinks } from "../../store/mediaLinks/selectors";

export default function MediaPage() {
  const dispatch = useDispatch();

  const allLinks = useSelector(selectAllLinks);

  useEffect(() => {
    dispatch(fetchMediaLinks());
  }, []);

  console.log("allLinks", allLinks);
  return (
    <div>
      <h1 id={styles.mainContentTitle}>Marieke in de media</h1>
      {/* @ts-ignore */}
      {allLinks.map((link) => {
        return (
          <div key={link.id} className={styles.mediaLink}>
            <h4>{link.title}</h4>
            <img
              src={link.imgLink}
              alt={link.title}
              className={styles.mediaLinkImg}
            />
          </div>
        );
      })}
    </div>
  );
}
