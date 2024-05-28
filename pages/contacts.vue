<script setup lang="ts">
import "../assets/css/contacts.css";
const options = ref([
  { label: "Customization", value: "Customization", selected: false },
  { label: "Conciergerie", value: "Conciergerie", selected: false },
  { label: "Cars for Sale", value: "CarsforSale", selected: false },
]);

function toggleSelection(option) {
  option.selected = !option.selected; // Toggle the selected status
}
const isActiveEmailPermission = ref(false);
const isActivePrivacy = ref(false);

function toggleActiveEmailPermission() {
  isActiveEmailPermission.value = !isActiveEmailPermission.value; // Inverte lo stato attivo/disattivo al click
}
function toggleActivePrivacy() {
  isActivePrivacy.value = !isActivePrivacy.value; // Inverte lo stato attivo/disattivo al click
}
</script>

<template>
  <div class=" bg-contacts">
    <h3 class="title-contacts "> <span class="mobile-line-break">Ready</span>  to start something unique?</h3>
    <div class="box-information-contacts">
      <div class="contactForm">
        <form action="action_page.php">
          <div class="label-title">What can we do for you?*</div>
          <select  class="select-service-btn-box" name="cars" id="cars">
            
             <option v-for="option in options" :value="option.label">{{ option.label }}</option>
          </select>
          

          <div class="service-btn-box">
            <button
              v-for="option in options"
              :key="option.value"
              :class="{ 'btn-selected': option.selected, 'btn-contacts': true }"
              @click.prevent="toggleSelection(option)"
            >
              {{ option.label }}
            </button>
          </div>

          <div class="container-contacts">
            <div class="form-box">
              <div class="box-label-input">
                <label class="label-title" for="name">Name*</label>
                <input type="text" id="name" name="firstname" />
              </div>
              <div class="box-label-input">
                <label class="label-title" for="lastName">Surname*</label>
                <input type="text" id="lastName" name="lastname" />
              </div>
              <div class="box-label-input">
                <label class="label-title" for="country">Country*</label>
                <input type="text" id="country" name="country" />
              </div>
              <div class="box-label-input">
                <label class="label-title" for="email">Email*</label>
                <input type="text" id="email" name="email" />
              </div>
              <div class="box-textarea">
                <label class="label-title" for="subject">Message*</label>
                <textarea
                  class="box-textarea-text"
                  id="subject"
                  name="subject"
                  style="height: 200px"
                ></textarea>
              </div>
              <div class="box-permission">
                <input
                  type="checkbox"
                  id="emailPermission"
                  name="emailPermission"
                />
                <span
                  class="checkmark"
                  :class="{ active: isActiveEmailPermission }"
                  @click="toggleActiveEmailPermission"
                ></span>

                <label class="" for="emailPermission"
                  >I want to stay update. By signing up, I agree to receive
                  emails about news, exclusive promotions and helpful tips from
                  Automobilies du Médoc. I respect your privacy and you can
                  unsubscribe at any time via the link at the bottom of each
                  email.</label
                >
              </div>
              <div class="box-permission">
                <input type="checkbox" id="privacy" name="privacy" />
                <span
                  class="checkmark"
                  :class="{ active: isActivePrivacy }"
                  @click="toggleActivePrivacy"
                ></span>

                <label class="" for="privacy"
                  >I confirm that I have read the Privacy Policy made pursuant
                  to Art. 13 European Regulation 679/2016, and that I give my
                  consent to the processing of personal data, for the purposes
                  indicated therein aimed at the proper performance of
                  contractual obligations.</label
                >
              </div>

              <input
                class="label-title btn-contacts submit"
                type="submit"
                value="Send Email"
              />
            </div>
          </div>
        </form>
      </div>
      <!-- <div class="col-one"></div> -->
      <div class="contactDetails">
        <div class="contact-details-info-title">Automobiles du Médoc</div>

        <div class="contact-details-info">Phone: 123 456 7895</div>
        <div class="contact-details-info">Email: test@test.com</div>
        <div class="contact-details-info">
          2792 Pl. des Quinconces, 33000 Bordeaux, Francia
        </div>
        <div class="contact-details-info">Company legal data:000000000</div>
      </div>
    </div>
  </div>
</template>
