<template>
	<div id="profile">
		<div class="row h-100">
			<transition name="fly-from-left">
				<div class="col-md-7 h-100 left" v-show="leftLoaded" :load="leftLoaded = true">
					<div class="container">
						<h4 class="profile">Your profile</h4>
						<div class="row">
							<div class="col-md-9 mx-auto mt-4 mb-2">
								<label for="username">Username</label>
								<div class="input-group">
									<input type="text" class="form-control" id="username" v-model="username">
								</div>
							</div>
							<div class="col-md-9 mx-auto mt-2 mb-2">
								<label for="email">E-mail</label>
								<div class="input-group">
									<input type="text" class="form-control" id="email" v-model="email">
								</div>
							</div>
							<div class="col-md-9 mx-auto mt-2 mb-2">
								<label for="region">Region</label>
								<div class="input-group">
									<select id="region" class="custom-select center" v-model="region">
										<option disabled selected>Select your region</option>
										<option id="africa" label="Africa">Africa</option>
										<option id="america" label="America">America</option>
										<option id="asia" label="Asia">Asia</option>
										<option id="europe" label="Europe">Europe</option>
										<option id="oceania" label="Oceania">Oceania</option>
									</select>
								</div>
							</div>
							<div class="col-md-9 mx-auto mt-2 mb-4">
								<label for="country">Country</label>
								<div class="input-group">
									<select id="country" class="custom-select center" v-model="country">
										<optgroup id="africa-group" label="Africa">
											<option value="Algeria" label="Algeria">Algeria</option>
											<option value="Angola" label="Angola">Angola</option>
											<option value="Benin" label="Benin">Benin</option>
											<option value="Botswana" label="Botswana">Botswana</option>
											<option value="Burkina Faso" label="Burkina Faso">Burkina Faso</option>
											<option value="Burundi" label="Burundi">Burundi</option>
											<option value="Cameroon" label="Cameroon">Cameroon</option>
											<option value="Cape Verde" label="Cape Verde">Cape Verde</option>
											<option value="Central African Republic" label="Central African Republic">Central African Republic</option>
											<option value="Chad" label="Chad">Chad</option>
											<option value="Comoros" label="Comoros">Comoros</option>
											<option value="Congo - Brazzaville" label="Congo - Brazzaville">Congo - Brazzaville</option>
											<option value="Congo - Kinshasa" label="Congo - Kinshasa">Congo - Kinshasa</option>
											<option value="Côte d’Ivoire" label="Côte d’Ivoire">Côte d’Ivoire</option>
											<option value="Djibouti" label="Djibouti">Djibouti</option>
											<option value="Egypt" label="Egypt">Egypt</option>
											<option value="Equatorial Guinea" label="Equatorial Guinea">Equatorial Guinea</option>
											<option value="Eritrea" label="Eritrea">Eritrea</option>
											<option value="Ethiopia" label="Ethiopia">Ethiopia</option>
											<option value="Gabon" label="Gabon">Gabon</option>
											<option value="Gambia" label="Gambia">Gambia</option>
											<option value="Ghana" label="Ghana">Ghana</option>
											<option value="Guinea" label="Guinea">Guinea</option>
											<option value="Guinea-Bissau" label="Guinea-Bissau">Guinea-Bissau</option>
											<option value="Kenya" label="Kenya">Kenya</option>
											<option value="Lesotho" label="Lesotho">Lesotho</option>
											<option value="Liberia" label="Liberia">Liberia</option>
											<option value="Libya" label="Libya">Libya</option>
											<option value="Madagascar" label="Madagascar">Madagascar</option>
											<option value="Malawi" label="Malawi">Malawi</option>
											<option value="Mali" label="Mali">Mali</option>
											<option value="Mauritania" label="Mauritania">Mauritania</option>
											<option value="Mauritius" label="Mauritius">Mauritius</option>
											<option value="Mayotte" label="Mayotte">Mayotte</option>
											<option value="Morocco" label="Morocco">Morocco</option>
											<option value="Mozambique" label="Mozambique">Mozambique</option>
											<option value="Namibia" label="Namibia">Namibia</option>
											<option value="Niger" label="Niger">Niger</option>
											<option value="Nigeria" label="Nigeria">Nigeria</option>
											<option value="Rwanda" label="Rwanda">Rwanda</option>
											<option value="Réunion" label="Réunion">Réunion</option>
											<option value="Saint Helena" label="Saint Helena">Saint Helena</option>
											<option value="Senegal" label="Senegal">Senegal</option>
											<option value="Seychelles" label="Seychelles">Seychelles</option>
											<option value="Sierra Leone" label="Sierra Leone">Sierra Leone</option>
											<option value="Somalia" label="Somalia">Somalia</option>
											<option value="South Africa" label="South Africa">South Africa</option>
											<option value="Sudan" label="Sudan">Sudan</option>
											<option value="Swaziland" label="Swaziland">Swaziland</option>
											<option value="São Tomé and Príncipe" label="São Tomé and Príncipe">São Tomé and Príncipe</option>
											<option value="Tanzania" label="Tanzania">Tanzania</option>
											<option value="Togo" label="Togo">Togo</option>
											<option value="Tunisia" label="Tunisia">Tunisia</option>
											<option value="Uganda" label="Uganda">Uganda</option>
											<option value="Western Sahara" label="Western Sahara">Western Sahara</option>
											<option value="Zambia" label="Zambia">Zambia</option>
											<option value="Zimbabwe" label="Zimbabwe">Zimbabwe</option>
										</optgroup>
										<optgroup id="america-group" label="America">
											<option value="Anguilla" label="Anguilla">Anguilla</option>
											<option value="Antigua and Barbuda" label="Antigua and Barbuda">Antigua and Barbuda</option>
											<option value="Argentina" label="Argentina">Argentina</option>
											<option value="Aruba" label="Aruba">Aruba</option>
											<option value="Bahamas" label="Bahamas">Bahamas</option>
											<option value="Barbados" label="Barbados">Barbados</option>
											<option value="Belize" label="Belize">Belize</option>
											<option value="Bermuda" label="Bermuda">Bermuda</option>
											<option value="Bolivia" label="Bolivia">Bolivia</option>
											<option value="Brazil" label="Brazil">Brazil</option>
											<option value="British Virgin Islands" label="British Virgin Islands">British Virgin Islands</option>
											<option value="Canada" label="Canada">Canada</option>
											<option value="Cayman Islands" label="Cayman Islands">Cayman Islands</option>
											<option value="Chile" label="Chile">Chile</option>
											<option value="Colombia" label="Colombia">Colombia</option>
											<option value="Costa Rica" label="Costa Rica">Costa Rica</option>
											<option value="Cuba" label="Cuba">Cuba</option>
											<option value="Dominica" label="Dominica">Dominica</option>
											<option value="Dominican Republic" label="Dominican Republic">Dominican Republic</option>
											<option value="Ecuador" label="Ecuador">Ecuador</option>
											<option value="El Salvador" label="El Salvador">El Salvador</option>
											<option value="Falkland Islands" label="Falkland Islands">Falkland Islands</option>
											<option value="French Guiana" label="French Guiana">French Guiana</option>
											<option value="Greenland" label="Greenland">Greenland</option>
											<option value="Grenada" label="Grenada">Grenada</option>
											<option value="Guadeloupe" label="Guadeloupe">Guadeloupe</option>
											<option value="Guatemala" label="Guatemala">Guatemala</option>
											<option value="Guyana" label="Guyana">Guyana</option>
											<option value="Haiti" label="Haiti">Haiti</option>
											<option value="Honduras" label="Honduras">Honduras</option>
											<option value="Jamaica" label="Jamaica">Jamaica</option>
											<option value="Martinique" label="Martinique">Martinique</option>
											<option value="Mexico" label="Mexico">Mexico</option>
											<option value="Montserrat" label="Montserrat">Montserrat</option>
											<option value="Netherlands Antilles" label="Netherlands Antilles">Netherlands Antilles</option>
											<option value="Nicaragua" label="Nicaragua">Nicaragua</option>
											<option value="Panama" label="Panama">Panama</option>
											<option value="Paraguay" label="Paraguay">Paraguay</option>
											<option value="Peru" label="Peru">Peru</option>
											<option value="Puerto Rico" label="Puerto Rico">Puerto Rico</option>
											<option value="Saint Barthélemy" label="Saint Barthélemy">Saint Barthélemy</option>
											<option value="Saint Kitts and Nevis" label="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
											<option value="Saint Lucia" label="Saint Lucia">Saint Lucia</option>
											<option value="Saint Martin" label="Saint Martin">Saint Martin</option>
											<option value="Saint Pierre and Miquelon" label="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
											<option value="Saint Vincent and the Grenadines" label="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
											<option value="Suriname" label="Suriname">Suriname</option>
											<option value="Trinidad and Tobago" label="Trinidad and Tobago">Trinidad and Tobago</option>
											<option value="Turks and Caicos Islands" label="Turks and Caicos Islands">Turks and Caicos Islands</option>
											<option value="U.S. Virgin Islands" label="U.S. Virgin Islands">U.S. Virgin Islands</option>
											<option value="United States" label="United States">United States</option>
											<option value="Uruguay" label="Uruguay">Uruguay</option>
											<option value="Venezuela" label="Venezuela">Venezuela</option>
										</optgroup>
										<optgroup id="asia-group" label="Asia">
											<option value="Afghanistan" label="Afghanistan">Afghanistan</option>
											<option value="Armenia" label="Armenia">Armenia</option>
											<option value="Azerbaijan" label="Azerbaijan">Azerbaijan</option>
											<option value="Bahrain" label="Bahrain">Bahrain</option>
											<option value="Bangladesh" label="Bangladesh">Bangladesh</option>
											<option value="Bhutan" label="Bhutan">Bhutan</option>
											<option value="Brunei" label="Brunei">Brunei</option>
											<option value="Cambodia" label="Cambodia">Cambodia</option>
											<option value="China" label="China">China</option>
											<option value="Cyprus" label="Cyprus">Cyprus</option>
											<option value="Georgia" label="Georgia">Georgia</option>
											<option value="Hong Kong SAR China" label="Hong Kong SAR China">Hong Kong SAR China</option>
											<option value="India" label="India">India</option>
											<option value="Indonesia" label="Indonesia">Indonesia</option>
											<option value="Iran" label="Iran">Iran</option>
											<option value="Iraq" label="Iraq">Iraq</option>
											<option value="Israel" label="Israel">Israel</option>
											<option value="Japan" label="Japan">Japan</option>
											<option value="Jordan" label="Jordan">Jordan</option>
											<option value="Kazakhstan" label="Kazakhstan">Kazakhstan</option>
											<option value="Kuwait" label="Kuwait">Kuwait</option>
											<option value="Kyrgyzstan" label="Kyrgyzstan">Kyrgyzstan</option>
											<option value="Laos" label="Laos">Laos</option>
											<option value="Lebanon" label="Lebanon">Lebanon</option>
											<option value="Macau SAR China" label="Macau SAR China">Macau SAR China</option>
											<option value="Malaysia" label="Malaysia">Malaysia</option>
											<option value="Maldives" label="Maldives">Maldives</option>
											<option value="Mongolia" label="Mongolia">Mongolia</option>
											<option value="Myanmar [Burma]" label="Myanmar [Burma]">Myanmar [Burma]</option>
											<option value="Nepal" label="Nepal">Nepal</option>
											<option value="Neutral Zone" label="Neutral Zone">Neutral Zone</option>
											<option value="North Korea" label="North Korea">North Korea</option>
											<option value="Oman" label="Oman">Oman</option>
											<option value="Pakistan" label="Pakistan">Pakistan</option>
											<option value="Palestinian Territories" label="Palestinian Territories">Palestinian Territories</option>
											<option value="People's Democratic Republic of Yemen" label="People's Democratic Republic of Yemen">People's Democratic Republic of Yemen</option>
											<option value="Philippines" label="Philippines">Philippines</option>
											<option value="Qatar" label="Qatar">Qatar</option>
											<option value="Saudi Arabia" label="Saudi Arabia">Saudi Arabia</option>
											<option value="Singapore" label="Singapore">Singapore</option>
											<option value="South Korea" label="South Korea">South Korea</option>
											<option value="Sri Lanka" label="Sri Lanka">Sri Lanka</option>
											<option value="Syria" label="Syria">Syria</option>
											<option value="Taiwan" label="Taiwan">Taiwan</option>
											<option value="Tajikistan" label="Tajikistan">Tajikistan</option>
											<option value="Thailand" label="Thailand">Thailand</option>
											<option value="Timor-Leste" label="Timor-Leste">Timor-Leste</option>
											<option value="Turkey" label="Turkey">Turkey</option>
											<option value="Turkmenistan" label="Turkmenistan">Turkmenistan</option>
											<option value="United Arab Emirates" label="United Arab Emirates">United Arab Emirates</option>
											<option value="Uzbekistan" label="Uzbekistan">Uzbekistan</option>
											<option value="Vietnam" label="Vietnam">Vietnam</option>
											<option value="Yemen" label="Yemen">Yemen</option>
										</optgroup>
										<optgroup id="europe-group" label="Europe">
											<option value="Albania" label="Albania">Albania</option>
											<option value="Andorra" label="Andorra">Andorra</option>
											<option value="Austria" label="Austria">Austria</option>
											<option value="Belarus" label="Belarus">Belarus</option>
											<option value="Belgium" label="Belgium">Belgium</option>
											<option value="Bosnia and Herzegovina" label="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
											<option value="Bulgaria" label="Bulgaria">Bulgaria</option>
											<option value="Croatia" label="Croatia">Croatia</option>
											<option value="Cyprus" label="Cyprus">Cyprus</option>
											<option value="Czech Republic" label="Czech Republic">Czech Republic</option>
											<option value="Denmark" label="Denmark">Denmark</option>
											<option value="East Germany" label="East Germany">East Germany</option>
											<option value="Estonia" label="Estonia">Estonia</option>
											<option value="Faroe Islands" label="Faroe Islands">Faroe Islands</option>
											<option value="Finland" label="Finland">Finland</option>
											<option value="France" label="France">France</option>
											<option value="Germany" label="Germany">Germany</option>
											<option value="Gibraltar" label="Gibraltar">Gibraltar</option>
											<option value="Greece" label="Greece">Greece</option>
											<option value="Guernsey" label="Guernsey">Guernsey</option>
											<option value="Hungary" label="Hungary">Hungary</option>
											<option value="Iceland" label="Iceland">Iceland</option>
											<option value="Ireland" label="Ireland">Ireland</option>
											<option value="Isle of Man" label="Isle of Man">Isle of Man</option>
											<option value="Italy" label="Italy">Italy</option>
											<option value="Jersey" label="Jersey">Jersey</option>
											<option value="Latvia" label="Latvia">Latvia</option>
											<option value="Liechtenstein" label="Liechtenstein">Liechtenstein</option>
											<option value="Lithuania" label="Lithuania">Lithuania</option>
											<option value="Luxembourg" label="Luxembourg">Luxembourg</option>
											<option value="Macedonia" label="Macedonia">Macedonia</option>
											<option value="Malta" label="Malta">Malta</option>
											<option value="Metropolitan France" label="Metropolitan France">Metropolitan France</option>
											<option value="Moldova" label="Moldova">Moldova</option>
											<option value="Monaco" label="Monaco">Monaco</option>
											<option value="Montenegro" label="Montenegro">Montenegro</option>
											<option value="Netherlands" label="Netherlands">Netherlands</option>
											<option value="Norway" label="Norway">Norway</option>
											<option value="Poland" label="Poland">Poland</option>
											<option value="Portugal" label="Portugal">Portugal</option>
											<option value="Romania" label="Romania">Romania</option>
											<option value="Russia" label="Russia">Russia</option>
											<option value="San Marino" label="San Marino">San Marino</option>
											<option value="Serbia" label="Serbia">Serbia</option>
											<option value="Serbia and Montenegro" label="Serbia and Montenegro">Serbia and Montenegro</option>
											<option value="Slovakia" label="Slovakia">Slovakia</option>
											<option value="Slovenia" label="Slovenia">Slovenia</option>
											<option value="Spain" label="Spain">Spain</option>
											<option value="Svalbard and Jan Mayen" label="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
											<option value="Sweden" label="Sweden">Sweden</option>
											<option value="Switzerland" label="Switzerland">Switzerland</option>
											<option value="Ukraine" label="Ukraine">Ukraine</option>
											<option value="Union of Soviet Socialist Republics" label="Union of Soviet Socialist Republics">Union of Soviet Socialist Republics</option>
											<option value="United Kingdom" label="United Kingdom">United Kingdom</option>
											<option value="Vatican City" label="Vatican City">Vatican City</option>
											<option value="Åland Islands" label="Åland Islands">Åland Islands</option>
										</optgroup>
										<optgroup id="oceania-group" label="Oceania">
											<option value="American Samoa" label="American Samoa">American Samoa</option>
											<option value="Antarctica" label="Antarctica">Antarctica</option>
											<option value="Australia" label="Australia">Australia</option>
											<option value="Bouvet Island" label="Bouvet Island">Bouvet Island</option>
											<option value="British Indian Ocean Territory" label="British Indian Ocean Territory">British Indian Ocean Territory</option>
											<option value="Christmas Island" label="Christmas Island">Christmas Island</option>
											<option value="Cocos [Keeling] Islands" label="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option>
											<option value="Cook Islands" label="Cook Islands">Cook Islands</option>
											<option value="Fiji" label="Fiji">Fiji</option>
											<option value="French Polynesia" label="French Polynesia">French Polynesia</option>
											<option value="French Southern Territories" label="French Southern Territories">French Southern Territories</option>
											<option value="Guam" label="Guam">Guam</option>
											<option value="Heard Island and McDonald Islands" label="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
											<option value="Kiribati" label="Kiribati">Kiribati</option>
											<option value="Marshall Islands" label="Marshall Islands">Marshall Islands</option>
											<option value="Micronesia" label="Micronesia">Micronesia</option>
											<option value="Nauru" label="Nauru">Nauru</option>
											<option value="New Caledonia" label="New Caledonia">New Caledonia</option>
											<option value="New Zealand" label="New Zealand">New Zealand</option>
											<option value="Niue" label="Niue">Niue</option>
											<option value="Norfolk Island" label="Norfolk Island">Norfolk Island</option>
											<option value="Northern Mariana Islands" label="Northern Mariana Islands">Northern Mariana Islands</option>
											<option value="Palau" label="Palau">Palau</option>
											<option value="Papua New Guinea" label="Papua New Guinea">Papua New Guinea</option>
											<option value="Pitcairn Islands" label="Pitcairn Islands">Pitcairn Islands</option>
											<option value="Samoa" label="Samoa">Samoa</option>
											<option value="Solomon Islands" label="Solomon Islands">Solomon Islands</option>
											<option value="South Georgia and the South Sandwich Islands" label="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
											<option value="Tokelau" label="Tokelau">Tokelau</option>
											<option value="Tonga" label="Tonga">Tonga</option>
											<option value="Tuvalu" label="Tuvalu">Tuvalu</option>
											<option value="U.S. Minor Outlying Islands" label="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option>
											<option value="Vanuatu" label="Vanuatu">Vanuatu</option>
											<option value="Wallis and Futuna" label="Wallis and Futuna">Wallis and Futuna</option>
										</optgroup>
									</select>
								</div>
							</div>
							<button class="button mx-auto mt-2 mb-4" @click="updateData" v-b-modal.updateDataModal>Update information</button>
							<icon-text-modal
								modal-id="updateDataModal"
								title="Update profile information ..."
								:icon="require('../../icons/sign.svg')"
								text="Your profile information has been successfully updated !"
							></icon-text-modal>
						</div>
						<h4 class="password">Change password</h4>
						<div class="row mt-4 mb-4">
							<div class="col-md-6 mt-2 mb-2">
								<label for="old_password">Old Password</label>
								<div class="input-group">
									<input type="password" class="form-control text-center" id="old_password" v-model="old_password">
								</div>
							</div>
							<div class="col-md-6 mt-2 mb-4">
								<label for="new_password">New Password</label>
								<div class="input-group">
									<input type="password" class="form-control text-center" id="new_password" v-model="new_password">
								</div>
							</div>
							<button class="button mx-auto mt-2 mb-2" :class="{ 'button-disabled' : !(old_password && new_password) }" @click="changePassword" v-b-modal.changePasswordModal>Change password</button>
							<icon-text-modal
								modal-id="changePasswordModal"
								title="Password change ..."
								:icon="(changePasswordSuccess) ? require('../../icons/lock_success.svg') : require('../../icons/lock_fail.svg')"
								:text="(changePasswordSuccess) ? 'Your password has been successfully changed !' : 'Password change unsuccessful. You\'ve entered wrong old password !'"
							></icon-text-modal>
						</div>
					</div>
				</div>
			</transition>
			<transition name="fly-from-right">
				<div class="col-sm-12 col-md-5 h-100 right" v-show="rightLoaded" :load="rightLoaded = true">
					<transition name="delayed-fly-from-top">
						<img class="big-avatar" :src="(avatar) ? require('../../icons/avatars/' + avatar + '.svg') : ''" alt="Avatar icon" v-show="avatarLoaded" :load="avatarLoaded = true">
					</transition>
					<h4 class="avatar">Choose your avatar</h4>
					<div class="sex-select">
						<button class="button-secondary" @click="selectMaleAvatars">Male</button>
						<button class="button-secondary" @click="selectFemaleAvatars">Female</button>
					</div>
					<div class="gallery">
						<div class="avatars grab" v-dragscroll.x="true" @mousedown="grabbing = true" @mouseup="grabbing = false" :class="{ grabbing: grabbing }">
							<img
								v-if="male"
								v-for="(avatar, index) in maleAvatars"
								:key="index"
								:class="avatar"
								:src="(avatar) ? require('../../icons/avatars/' + avatar + '.svg') : ''"
								alt="Avatar icon"
								@click="selectAvatar($event)"
							></img>
							<img
								v-if="female"
								v-for="(avatar, index) in femaleAvatars"
								:key="index"
								:class="avatar"
								:src="(avatar) ? require('../../icons/avatars/' + avatar + '.svg') : ''"
								alt="Avatar icon"
								@click="selectAvatar($event)"
							></img>
						</div>
					</div>
					<button class="button" @click="changeAvatar">Change avatar</button>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	import { globals } from '../../js/globals.js'
	import * as functions from '../../js/functions.js'
	import IconTextModal from '../elements/IconTextModal.vue'
	export default {
		name: 'Profile',
		components: {
			IconTextModal
		},
		data() {
			return {
				username: null,
				email: null,
				region: null,
				country: null,
				old_password: null,
				new_password: null,
				avatar: null,
				maleAvatars: [],
				femaleAvatars: [],
				male: false,
				female: false,
				grabbing: false,
				changePasswordSuccess: false,
				leftLoaded: false,
				rightLoaded: false,
				avatarLoaded: false
			}
		},
		beforeMount() {
			this.initFormParts();
			this.fetchUserData();
			for (let i = 1; i <= 22; i++) {
				this.$data.maleAvatars.push('boy-' + i);
				this.$data.femaleAvatars.push('girl-' + i);
			}
		},
		methods: {
			fetchUserData: async function () {
				this.$data.username = this.$store.state.user.username;
				this.$data.email = this.$store.state.user.email;
				this.$data.region = this.$store.state.user.region;
				this.$data.country = this.$store.state.user.country;
				this.$data.avatar = this.$store.state.user.avatar;
				if (this.$data.avatar) {
					this.$data.male = (this.$data.avatar.charAt(0) == 'b') ? true : false;
					this.$data.female = (this.$data.avatar.charAt(0) == 'g') ? true : false;
				}
			},

			initFormParts: async function () {
				let $context = globals.$jquery(this.$el);
				let region = (this.$data.region) ? this.$data.region.toLowerCase() : null;
				if (!region) {
					this.$data.country = null;
					$context.find('select#country').find('optgroup').hide();
				} else {
					$context.find('select#country').find('optgroup').hide();
					$context.find('select#country').find('optgroup#' + region + '-group').show();
				}
				$context.find('select#region').on('change', () => {
					region = this.$data.region.toLowerCase();
					$context.find('select#country').find('optgroup').hide();
					$context.find('select#country').find('optgroup#' + region + '-group').show();
					$context.find('select#country').val('');
					this.$data.country = null;
				});
			},

			selectMaleAvatars: async function () {
				this.$data.male = true;
				this.$data.female = false;
			},

			selectFemaleAvatars: async function() {
				this.$data.female = true;
				this.$data.male = false;
			},

			selectAvatar: async function (event) {
				let avatar = globals.$jquery(event.currentTarget).attr('class');
				this.$data.avatar = avatar;
			},

			updateData: async function () {
				let user = this.$store.state.user;
				let type = 'updateData';
				let new_username = this.$data.username;
				let new_email = this.$data.email;
				let new_region = this.$data.region;
				let new_country = this.$data.country;
				functions.serverAxios().patch(`/users/${user.id}`, {
					type,
					new_username,
					new_email,
					new_region,
					new_country
				})
					.then((response) => {
						this.$store.state.user = response.data;
						functions.updateClanObject(user.clan_id);
					})
					.catch((error) => {
						console.log("Error in updating user's data: ", error);
					});
			},

			changePassword: async function () {
				let user = this.$store.state.user;
				let type = 'changePassword';
				let old_password = this.$data.old_password;
				let new_password = this.$data.new_password;
				functions.serverAxios().patch(`/users/${user.id}`, {
					type,
					old_password,
					new_password
				})
					.then((response) => {
						if (response.data == false) {
							this.$data.changePasswordSuccess = false;
						} else {
							this.$data.changePasswordSuccess = true;
							this.$store.state.user = response.data;
							this.$data.old_password = null;
							this.$data.new_password = null;
						}
					})
					.catch((error) => {
						console.log("Error in changing user's password: ", error);
					});
			},

			changeAvatar: async function () {
				let user = this.$store.state.user;
				let type = 'changeAvatar';
				let new_avatar = this.$data.avatar;
				functions.serverAxios().patch(`/users/${user.id}`, {
					type,
					new_avatar
				})
					.then((response) => {
						let bigAvatar = globals.$jquery(this.$el).find('.big-avatar');
						bigAvatar.addClass('image-flip-animation');
						setTimeout(function () {
							bigAvatar.removeClass('image-flip-animation');
						}, 500);
						this.$store.state.user = response.data;
						functions.updateClanObject(user.clan_id);
					})
					.catch((error) => {
						console.log("Error in changing user's avatar: ", error);
					});
			}
		}
	}
</script>
