import React from 'react'

function ProfileForm() {
    return (
        <div>
            <form>
                <div>
                    <label>Avatar</label>
                    <input type="file" />
                </div>
                <div>
                    <label>Nickname</label>
                    <fieldset>
                        <legend>Nickname</legend>
                        <input type="text" name="nickname" value="nickname" />
                    </fieldset>
                </div>
                <div>
                    <label>Gender</label>
                    <label class="container">Male
                    <input type="radio" name="radio" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">Male
                    <input type="radio" name="radio" />
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div>
                    <label>Date of Birth</label>
                    <fieldset>
                        <legend>Date of Birth</legend>
                        <input type="date" />
                    </fieldset>
                </div>
                <div>
                <label>Location</label>
                    <fieldset>
                        <legend>Postal Address</legend>
                        <input type="text" name="location" value="location" />
                    </fieldset>
                </div>
                <div>
                    <button type="submit">Save Changes</button>
                </div>
            </form> 
        </div>
    )
}

export default ProfileForm
