import React, { useEffect, useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import Info from "../../components/profile/Info";
import Posts from "../../components/profile/Posts";
import Saved from "../../components/profile/Saved";
import { useSelector, useDispatch } from "react-redux";
import LoadIcon from "../../images/loading.gif";
import {
  getProfileUsers,
  getAllUsersForAdmin,
} from "../../redux/actions/profileAction";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { profile, auth } = useSelector((state) => state);
  // const token = auth.token;
  // console.log(token);
  const { isAmin, profile_users } = profile;
  const dispatch = useDispatch();

  const { id } = useParams();
  const [saveTab, setSaveTab] = useState(false);

  useEffect(() => {
    if (profile.ids.every((item) => item !== id)) {
      dispatch(getProfileUsers({ id, auth }));
      // dispatch(getAllUsersForAdmin({ auth }));
    }
  }, [id, auth, dispatch, profile.ids]);
  useEffect(() => {
    if (isAmin) {
      dispatch(getAllUsersForAdmin({ auth }));
    }
  }, [auth, dispatch, isAmin]);
  return (
    <div className="profile">
      <div className="userpage">
        <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />

        {auth.user._id === id && (
          <div className="profile_tab">
            <button
              className={saveTab ? "" : "active"}
              onClick={() => setSaveTab(false)}
            >
              Posts
            </button>
            <button
              className={saveTab ? "active" : ""}
              onClick={() => setSaveTab(true)}
            >
              Saved
            </button>
          </div>
        )}
        {profile.loading ? (
          <img className="d-block mx-auto" src={LoadIcon} alt="loading" />
        ) : (
          <>
            {saveTab ? (
              <Saved auth={auth} dispatch={dispatch} />
            ) : (
              <Posts
                auth={auth}
                profile={profile}
                dispatch={dispatch}
                id={id}
              />
            )}
          </>
        )}
        {profile.isAmin && auth.user._id === id ? (
          <div className="col-right">
            <h2>{isAmin ? "Users" : ""}</h2>
            <CSVLink data={profile_users}>
              {" "}
              <button>DOWNLOAD DATA</button>
            </CSVLink>

            <div style={{ overflowX: "auto" }}>
              <table className="customers">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Admin</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {profile_users.map((user) => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        {user.role === 1 ? (
                          <i className="fas fa-check" title="Admin"></i>
                        ) : (
                          <i className="fas fa-times" title="User"></i>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Profile;
