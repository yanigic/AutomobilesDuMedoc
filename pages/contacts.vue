<script setup lang="ts">
import "../assets/css/contacts.css";
</script>

<template>
  <div class="">
    <h3 class="title-contacts">Ready to start something unique?</h3>
    <div>What can we do for you?*</div>
    <div class="service-btn-box">
      <div class="btn-contacts">Customization</div>
      <div class="btn-contacts">Conciergerie</div>
      <div class="btn-contacts">Cars for Sale</div>
    </div>

    <div class="container-contacts">
      <form class="form-box" action="action_page.php">
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
          <input type="checkbox" id="emailPermission" name="emailPermission" />

          <label class="" for="emailPermission"
            >I want to stay update. By signing up, I agree to receive emails
            about news, exclusive promotions and helpful tips from Automobilies
            du Médoc. I respect your privacy and you can unsubscribe at any time
            via the link at the bottom of each email.</label
          >
        </div>
        <div class="box-permission">
          <input type="checkbox" id="privacy" name="privacy" />

          <label class="" for="privacy"
            >I confirm that I have read the Privacy Policy made pursuant to Art.
            13 European Regulation 679/2016, and that I give my consent to the
            processing of personal data, for the purposes indicated therein
            aimed at the proper performance of contractual obligations.</label
          >
        </div>

        <input
          class="label-title btn-contacts"
          type="submit"
          value="Send Email"
        />
      </form>
    </div>
  </div>
</template>
