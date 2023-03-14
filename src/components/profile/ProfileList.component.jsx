import React from "react";
import styles from "./ProfileList.module.css";
import Profile from "./Profile.component";
import { profiles } from "../../profile-data";

const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team Members</h1>

        {/* mivel az osztálynév nem egy szó ezért kell []-be rakni*/}

        <div className={styles["profile-container"]}>
          {profiles.map((items) => {
            // használhatunk destuktúrálást is, hogy ne kelljen sokszor az item.valami leírni
            const { id, img, name, job, company, link } = items;

            //minden iterációban visszaad egy Profile komponenst
            return (
              <Profile
                key={id}
                image={img}
                name={name}
                job={job}
                company={company}
                link={link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfileList;
