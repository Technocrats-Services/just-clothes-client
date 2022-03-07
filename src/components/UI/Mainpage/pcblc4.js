import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
import "animate.css";

export default function Pcb4() {
  return (
    <div style={{ height: "500px", backgroundColor: "#a5f0e3" }}>
      <h2 className="text-center pt-5">
        Dont keep the fun just to yourself Share it to your friends...
      </h2>
      <div className="d-flex justify-content-center mt-5">
        {" "}
        <div
          style={{
            height: "300px",
            width: "210px",
            backgroundColor: "whitesmoke",
            borderRadius: "10px",
          }}
        >
          <div
            className="row ms-4 mt-5"
            style={{ height: "150px", width: "150px" }}
          >
            <FacebookShareButton
              url=" "
              quote=""
              className="col-4 animate__animated animate__rotateIn"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
              url=" "
              quote=""
              className="col-4 animate__animated animate__rotateIn"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <EmailShareButton
              url=" "
              quote=""
              className="col-4 animate__animated animate__rotateIn"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
            <InstapaperShareButton
              url=" "
              quote=""
              className="col-4 animate__animated animate__rotateIn "
            >
              <InstapaperIcon size={32} round />
            </InstapaperShareButton>
            <ViberShareButton
              url=" "
              quote=""
              className="col-4 animate__animated animate__rotateIn"
            >
              <ViberIcon size={32} round />
            </ViberShareButton>
            <PinterestShareButton
              url=" "
              quote=""
              className="col-4 animate__animated animate__rotateIn "
            >
              <PinterestIcon size={32} round />
            </PinterestShareButton>
            <TelegramShareButton
              url=" "
              quote=""
              className="col-4 animate__animated animate__rotateIn "
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <LinkedinShareButton
              url=" "
              quote=""
              className="col-4 animate__animated animate__rotateIn"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <FacebookShareButton
              url=" "
              quote=""
              className="col-4 animate__animated animate__rotateIn"
            >
              <i className="bi bi-instagram " style={{ fontSize: "28px" }}></i>
            </FacebookShareButton>
          </div>
          <h5 className="ms-2 mt-4">Share it wherever you like</h5>
        </div>
      </div>
    </div>
  );
}
