const db = require("./db");

const Query = {
    test: () => "Successfully running graphql",
    homepage: () => db.allData.list(),
    header: () => db.allData.list(),  // Assuming you have a method to get header data
    footer: () => db.allData.list(),  // Assuming you have a method to get footer data
    about_us: () => db.allData.list(),  // Assuming you have a method to get about_us data
    plan: () => db.allData.list(),  // Assuming you have a method to get plan data
    contact_us: () => db.allData.list(),  // Assuming you have a method to get contactus data
    my_account: () => db.allData.list()  // Assuming you have a method to get myAccount data
}

const Homepage = {
    hero_section_title: (parent) => parent.homepage.hero_section_title,
    hero_section_desc: (parent) => parent.homepage.hero_section_desc,
    hero_section_first_btn: (parent) => parent.homepage.hero_section_first_btn,
    hero_section_second_btn: (parent) => parent.homepage.hero_section_second_btn,
    hero_section_image: (parent) => parent.homepage.hero_section_image,
    fitness_programs_section_title: (parent) => parent.homepage.fitness_programs_section_title,
    fitness_programs_section_desc: (parent) => parent.homepage.fitness_programs_section_desc,
    fitness_programs_section_cards: (parent) => parent.homepage.fitness_programs_section_cards.map(card => ({
        program_id: card.program_id,
        program_title: card.program_title,
        program_desc: card.program_desc
    })),
    success_stories_section_title: (parent) => parent.homepage.success_stories_section_title,
    success_stories_section_desc: (parent) => parent.homepage.success_stories_section_desc,
    success_stories_section_cards: (parent) => parent.homepage.success_stories_section_cards.map(card => ({
        card_id: card.card_id,
        user_avatar_img: card.user_avatar_img,
        user_review: card.user_review,
        user_name: card.user_name,
        user_role: card.user_role
    }))
}


const AboutUs = {
    hero_section_image: (parent) => parent.about_us.hero_section_image,
    hero_section_title: (parent) => parent.about_us.hero_section_title,
    hero_section_desc: (parent) => parent.about_us.hero_section_desc,
    our_team_members_card: (parent) => parent.about_us.our_team_members_card.map(member => ({
        member_avatar_image: member.member_avatar_image,
        member_name: member.member_name,
        member_role: member.member_role,
    })),
}


const Plan = {
    hero_section_image: (parent) => parent.plan?.hero_section_image,
    hero_section_title: (parent) => parent.plan?.hero_section_title,
    hero_section_desc: (parent) => parent.plan?.hero_section_desc,
    plan_first_btn: (parent) => parent.plan?.plan_first_btn,
    plan_second_btn: (parent) => parent.plan?.plan_second_btn,
    plan_cards: (parent) => parent.plan?.plan_cards?.map(card => ({
        plan_name: card.plan_name,
        plan_price: card.plan_price,
        plan_highlights: card.plan_highlights,
        plan_button_value: card.plan_button_value,
    })) || [],
};


const ContactUs = {
    feedback_form_title: (parent) => parent.contact_us.feedback_form_title,
    feedback_form_desc: (parent) => parent.contact_us.feedback_form_desc,
    button_value: (parent) => parent.contact_us.button_value,
    site_map_view: (parent) => parent.contact_us.site_map_view,
}


const MyAccount = {
    custom_icons: (parent) => parent.my_account.custom_icons,
    user_image_avatar: (parent) => parent.my_account.user_image_avatar,
}

const Header = {
    brand_logo: (parent) => parent.header.brand_logo,
    site_name: (parent) => parent.header.site_name,
}

const Footer = {
    brand_logo: (parent) => parent.footer.brand_logo,
    site_name: (parent) => parent.footer.site_name,
    at_symbol: (parent) => parent.footer.at_symbol,
}

module.exports = { Query, Homepage, AboutUs, Plan, ContactUs, MyAccount, Header, Footer};
