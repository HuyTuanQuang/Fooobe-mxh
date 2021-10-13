import React, { useRef, useState, useMemo, useCallback } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import { BsTextLeft, BsImageFill } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
import "draft-js/dist/Draft.css";
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "@draft-js-plugins/mention";
//import mentions from "./mentions";
import "@draft-js-plugins/mention/lib/plugin.css";
//hastag
import "@draft-js-plugins/hashtag/lib/plugin.css";
//hastag
import createHashtagPlugin from "@draft-js-plugins/hashtag";
import hashtagStyles from "./../../../../storysStatus/style/hastag.module.css";
//link
import createLinkifyPlugin from "@draft-js-plugins/linkify";
//Image
import ImageUploading from "react-images-uploading";
import { CircularProgressbar } from "react-circular-progressbar";

const hashtagPlugin = createHashtagPlugin({ theme: hashtagStyles });
const linkifyPlugin = createLinkifyPlugin();

function SMPEditPost({
  classes,
  setOpen,
  value,
  setDataStory,
  dataStory,
  keyAPI,
  TOKEN,
  PATH,
  listFriend,
}) {
  let history = useHistory();
  const [newData, setNewData] = useState(
    dataStory.filter((item) => item.story_stt === value.story_stt)[0]
  );
  const dataTextValue = {
    fake_content: value.fake_content,
    content: value.content,
  };
  const [dataText, setDataText] = useState(dataTextValue);
  const [progress, setProgress] = useState(null);
  const [openEditPost, setOpenEditPost] = useState(true);
  const [openEditText, setOpenEditText] = useState(false);
  const [openEditImage, setOpenEditImage] = useState(false);
  const [image, setImage] = useState(value.format.split(";"));
  const [state, setState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(value.content))
    )
  );
  const [state2, setState2] = useState(listFriend);
  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin();

    // eslint-disable-next-line no-shadow
    const { MentionSuggestions } = mentionPlugin;
    // eslint-disable-next-line no-shadow
    const plugins = [mentionPlugin, hashtagPlugin, linkifyPlugin];
    return { plugins, MentionSuggestions };
  }, []);
  const [open1, setOpen1] = useState(false);
  const onOpenChange = useCallback((_open: boolean) => {
    setOpen1(_open);
  }, []);

  const onSearchChange = useCallback(({ value }: { value: string }) => {
    setState2(defaultSuggestionsFilter(value, listFriend));
  }, []);
  const onExtractMentions = () => {
    const contentState = state.getCurrentContent();
    const raw = convertToRaw(contentState);
    let mentionedUsers = [];

    for (let key in raw.entityMap) {
      const ent = raw.entityMap[key];
      if (ent.type === "mention") {
        mentionedUsers.push(ent.data.mention);

        mentionedUsers = [];
      }
    }
  };

  const hekegu = (event) => {
    setDataText({
      ...dataText,
      content: event.currentTarget,
      fake_content: event.currentTarget.textContent,
    });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const openText = () => {
    setOpenEditPost(false);
    setOpenEditText(true);
  };
  const openImage = () => {
    setOpenEditPost(false);
    setOpenEditImage(true);
  };
  const onChangeImages = (imageList, addUpdateIndex) => {
    setProgress(0);
    var uuid = require("uuid");
    const tunhien = uuid.v4();
    const tunhien2 = uuid.v4();
    const tunhien4 = uuid.v4();
    const tunhien3 = "fo" + Math.floor(Math.random() * 100000);
    const formData = new FormData();
    let last_dot = imageList[0].file.name.lastIndexOf(".");
    let ext = imageList[0].file.name.slice(last_dot + 1);
    const progressBar = {
      onUploadProgress: (progressEvent) => {
        setProgress(
          Math.round(Number((progressEvent.loaded / progressEvent.total) * 100))
        );
      },
    };
    // upload data cho đối tượng formdata
    formData.append(
      "myFile",
      imageList[0].file,
      tunhien + tunhien2 + tunhien4 + "-" + tunhien3 + "." + ext
    );
    formData.append("id", PATH);
    formData.append("token", TOKEN);

    Axios.post(keyAPI.apiPostImages, formData, progressBar)
      .then(({ data }) => {
        if (data.check === "xp") {
          history.push("/logout");
        } else {
          setImage([
            ...image,
            tunhien + tunhien2 + tunhien4 + "-" + tunhien3 + "." + ext,
          ]);
          setProgress(null);
        }
      })
      .catch((error) => {
        setProgress(null);
      });
  };
  const changeEditImage = (ev) => {
    setOpen(false);
    if (image.length > 0) {
      Axios.post(keyAPI.apiEventStory, {
        id: PATH,
        token: TOKEN,
        ev: ev,
        ts: value.story_stt,
        tsy: image.length > 0 ? image.join(";") : "",
      })
        .then(({ data }) => {
          console.log(data);
          if (data.check === "xp") {
            history.push("/logout");
          } else {
            if (typeof data !== undefined) {
              if (data.resul === "ok") {
                newData.format = image.join(";");
                setDataStory((oldData) => {
                  let newState;
                  newState = oldData.map((val, index) => {
                    return val.story_stt === value.story_stt ? newData : val;
                  });
                  return newState;
                });
                const nextNotices = document.getElementById("snackbar-fooobe");
                nextNotices.className = "showSnackBarFooobe";
                nextNotices.innerText = "Đã thay đổi nội dung bài viết";
                setTimeout(function () {
                  nextNotices.className = nextNotices.className.replace(
                    "showSnackBarFooobe",
                    "showSnackBarFooobe-2"
                  );
                }, 5000);
              }
            }
          }
        })
        .catch((error) => {
          if (error.response) {
            console.log("Truy vấn có vấn đề");
          } else if (error.request) {
            console.log("Không nhận được phản hồi");
          } else {
            console.log("I am Nhân by Fo");
          }
        });
    }
  };

  const changeEditText = (ev) => {
    setOpen(false);
    if (dataText.fake_content.length > 150) {
      Axios.post(keyAPI.apiEventStory, {
        id: PATH,
        token: TOKEN,
        ev: ev,
        ts: value.story_stt,
        tsy: dataText.fake_content,
        tsx: dataText.content.outerHTML,
      })
        .then(({ data }) => {
          console.log(data);
          if (data.check === "xp") {
            history.push("/logout");
          } else {
            if (typeof data !== undefined) {
              if (data.resul === "ok") {
                newData.content = dataText.content.outerHTML.replaceAll(
                  'contenteditable="true"',
                  'contenteditable="false"'
                );
                newData.fake_content = dataText.fake_content;
                setDataStory((oldData) => {
                  let newState;
                  newState = oldData.map((val, index) => {
                    return val.story_stt === value.story_stt ? newData : val;
                  });
                  return newState;
                });
                const nextNotices = document.getElementById("snackbar-fooobe");
                nextNotices.className = "showSnackBarFooobe";
                nextNotices.innerText = "Đã thay đổi nội dung bài viết";
                setTimeout(function () {
                  nextNotices.className = nextNotices.className.replace(
                    "showSnackBarFooobe",
                    "showSnackBarFooobe-2"
                  );
                }, 5000);
              }
            }
          }
        })
        .catch((error) => {
          if (error.response) {
            console.log("Truy vấn có vấn đề");
          } else if (error.request) {
            console.log("Không nhận được phản hồi");
          } else {
            console.log("I am Nhân by Fo");
          }
        });
    } else {
      Axios.post(keyAPI.apiEventStory, {
        id: PATH,
        token: TOKEN,
        ev: ev,
        ts: value.story_stt,
        tsy: "",
        tsx: dataText.content.outerHTML,
      })
        .then(({ data }) => {
          if (data.check === "xp") {
            history.push("/logout");
          } else {
            if (typeof data !== undefined) {
              if (data.resul === "ok") {
                newData.content = dataText.content.outerHTML;
                newData.fake_content = "";
                setDataStory((oldData) => {
                  let newState;
                  newState = oldData.map((val, index) => {
                    return val.story_stt === value.story_stt ? newData : val;
                  });
                  return newState;
                });
                const nextNotices = document.getElementById("snackbar-fooobe");
                nextNotices.className = "showSnackBarFooobe";
                nextNotices.innerText = "Đã thay đổi nội dung bài viết";
                setTimeout(function () {
                  nextNotices.className = nextNotices.className.replace(
                    "showSnackBarFooobe",
                    "showSnackBarFooobe-2"
                  );
                }, 5000);
              }
            }
          }
        })
        .catch((error) => {
          if (error.response) {
            console.log("Truy vấn có vấn đề");
          } else if (error.request) {
            console.log("Không nhận được phản hồi");
          } else {
            console.log("I am Nhân by Fo");
          }
        });
    }
  };
  const onErrorImage = (errors) => {
    const nextNotices = document.getElementById("snackbar-fooobe");
    nextNotices.className = "showSnackBarFooobe";
    if (errors.acceptType) {
      nextNotices.innerText = "Định dạng hình ảnh không phù hợp";
    } else if (errors.maxFileSize) {
      nextNotices.innerText = "Kích thước tệp không được vượt quá 3mb";
    } else if (errors.maxNumber) {
      nextNotices.innerText = "Bạn không thể gửi nhiều hơn 500 hình ảnh";
    }
    setTimeout(function () {
      nextNotices.className = nextNotices.className.replace(
        "showSnackBarFooobe",
        "showSnackBarFooobe-2"
      );
    }, 5000);
  };
  //
  const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  };

  const [dragAndDrop, setDragAndDrop] = React.useState(initialDnDState);

  // onDragStart fires when an element
  // starts being dragged
  const onDragStart = (event) => {
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: image,
    });

    // Note: this is only for Firefox.
    // Without it, the DnD won't work.
    // But we are not using it.
    event.dataTransfer.setData("text/html", "");
  };

  // onDragOver fires when an element being dragged
  // enters a droppable area.
  // In this case, any of the items on the list
  const onDragOver = (event) => {
    // in order for the onDrop
    // event to fire, we have
    // to cancel out this one
    event.preventDefault();

    let newList = dragAndDrop.originalOrder;

    // index of the item being dragged
    const draggedFrom = dragAndDrop.draggedFrom;

    // index of the droppable area being hovered
    const draggedTo = Number(event.currentTarget.dataset.position);

    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = (event) => {
    setImage(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  // Not needed, just for logging purposes:
  React.useEffect(() => {
    console.log("Dragged From: ", dragAndDrop && dragAndDrop.draggedFrom);
    console.log("Dropping Into: ", dragAndDrop && dragAndDrop.draggedTo);
  }, [dragAndDrop]);

  React.useEffect(() => {
    console.log("List updated!");
  }, [image]);

  //

  const removeImage = (item) => {
    setImage(
      image.filter((img) => {
        return img !== item;
      })
    );
  };

  return (
    <div className="classCompSettins">
      <DialogContent className={classes.titleStyle}>
        Chỉnh sửa bài viết
      </DialogContent>{" "}
      <div
        style={{
          width: "100%",
          height: "0.1px",
          backgroundColor: "rgba(201, 192, 192, 0.966)",
          marginTop: "10px",
          marginBottom: "15px",
        }}
      ></div>
      <ImageUploading
        onChange={onChangeImages}
        acceptType={["jpg", "gif", "png"]}
        onError={(errors) => onErrorImage(errors)}
        maxFileSize={5000000}
      >
        {({ imageList, onImageUpload, errors, dragProps }) => (
          <DialogContent className={classes.textStyle}>
            <br />
            {openEditPost && (
              <div>
                <div className="class-setting-storys" onClick={openText}>
                  <div className="class-setting-storys-icon">
                    <BsTextLeft />
                  </div>
                  <div style={{ width: "90%" }}>Chỉnh sửa văn bản</div>
                  <div className="class-setting-storys-next">
                    <GrNext />
                  </div>
                </div>
                {value.type_post === "images" && (
                  <div className="class-setting-storys" onClick={openImage}>
                    <div className="class-setting-storys-icon">
                      <BsImageFill />
                    </div>
                    <div style={{ width: "90%" }}>Chỉnh sửa hình ảnh</div>
                    <div className="class-setting-storys-next">
                      <GrNext />
                    </div>
                  </div>
                )}
                <div className="class-setting-storys">
                  <div className="class-setting-storys-icon">
                    <FaTags />
                  </div>
                  <div style={{ width: "90%" }}>Chỉnh sửa tag</div>
                  <div className="class-setting-storys-next">
                    <GrNext />
                  </div>
                </div>
              </div>
            )}

            {/* Chỉnh sửa text */}
            {openEditText && (
              <div
                className="new-edit-text-story"
                style={{ minHeight: "150px", maxHeight: "400px" }}
              >
                <div
                  // onKeyDown={handleKeyDown}
                  className="comment-style-container-right-cmt-rep-content-input-create-div"
                  onInput={hekegu}
                >
                  <Editor
                    editorState={state}
                    onClick={onExtractMentions}
                    onChange={setState}
                    plugins={plugins}
                    placeholder={"Bài viết này có ý nghĩa gì?"}
                  />
                  <MentionSuggestions
                    open={open1}
                    onOpenChange={onOpenChange}
                    onSearchChange={onSearchChange}
                    suggestions={state2}
                    onAddMention={onExtractMentions}
                    onClick={onExtractMentions}
                  />
                </div>
              </div>
            )}
            {openEditImage && (
              <div
                className="new-edit-image-story"
                style={{
                  minHeight: "150px",
                  maxHeight: "400px",
                  overflowY: "auto",
                }}
                {...dragProps}
              >
                {image.map((item, index) => {
                  if (item.length > 1) {
                    return (
                      <div
                        key={index}
                        data-position={index}
                        draggable
                        onDragStart={onDragStart}
                        onDragOver={onDragOver}
                        onDrop={onDrop}
                        onDragLeave={onDragLeave}
                        className="new-edit-image-story-img"
                      >
                        <img
                          src={process.env.PUBLIC_URL + `../files/${item}`}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <div
                          className="new-edit-image-story-close"
                          onClick={() => removeImage(item)}
                        >
                          <CloseIcon />
                        </div>
                        <div className="new-edit-image-story-index">
                          {index + 1 + "/" + image.length}
                        </div>
                      </div>
                    );
                  }
                })}
                {progress !== null && (
                  <div className="new-edit-image-story-div">
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <CircularProgressbar
                        value={progress}
                        text={`${progress}%`}
                      />
                    </div>
                  </div>
                )}
                <div
                  className="new-edit-image-story-div"
                  onClick={onImageUpload}
                >
                  Chọn hoặc di chuyển
                </div>
              </div>
            )}
          </DialogContent>
        )}
      </ImageUploading>
      {openEditText && (
        <DialogActions>
          <Button
            color="primary"
            style={{ textTransform: "none", fontWeight: "600" }}
            onClick={handleClose}
          >
            Xóa, bỏ
          </Button>
          <Button
            className={classes.deleteStyle}
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => changeEditText("changeedittext")}
          >
            Cập nhật
          </Button>
        </DialogActions>
      )}
      {/* Chỉnh sửa Image */}
      {openEditImage && (
        <DialogActions>
          <Button
            color="primary"
            style={{ textTransform: "none", fontWeight: "600" }}
            onClick={handleClose}
          >
            Xóa, bỏ
          </Button>
          <Button
            className={classes.deleteStyle}
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => changeEditImage("changeeditimage")}
          >
            Cập nhật
          </Button>
        </DialogActions>
      )}
    </div>
  );
}

export default SMPEditPost;
