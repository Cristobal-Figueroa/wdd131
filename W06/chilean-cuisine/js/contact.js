document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectSelect = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const recipeUpload = document.getElementById('recipe-upload');
    const recipeTitleInput = document.getElementById('recipe-title');
    const recipeRegionSelect = document.getElementById('recipe-region');
    const recipeDescriptionInput = document.getElementById('recipe-description');
    const formResponse = document.getElementById('form-response');
    const accordionHeaders = document.querySelectorAll('.accordion-header');


    if (subjectSelect && recipeUpload) {
        subjectSelect.addEventListener('change', () => {
            if (subjectSelect.value === 'recipe') {
                recipeUpload.style.display = 'block';
            } else {
                recipeUpload.style.display = 'none';
            }
        });
    }


    function validateName() {
        const nameError = document.getElementById('name-error');
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Please enter your name.';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Please enter your email address.';
            return false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    function validateMessage() {
        const messageError = document.getElementById('message-error');
        if (!messageInput.value.trim()) {
            messageError.textContent = 'Please enter a message.';
            return false;
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'The message must be at least 10 characters long.';
            return false;
        } else {
            messageError.textContent = '';
            return true;
        }
    }


    function validateRecipeFields() {
        if (subjectSelect.value !== 'recipe') {
            return true;
        }
        
        if (!recipeTitleInput.value.trim()) {
            alert('Please enter a title for your recipe.');
            return false;
        }
        
        if (!recipeDescriptionInput.value.trim()) {
            alert('Please enter a description for your recipe.');
            return false;
        }
        
        return true;
    }


    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            

            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();
            const areRecipeFieldsValid = validateRecipeFields();
            
            if (isNameValid && isEmailValid && isMessageValid && areRecipeFieldsValid) {

                const formData = {
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    subject: subjectSelect.value,
                    message: messageInput.value.trim(),
                    newsletter: document.getElementById('newsletter').checked
                };
                

                if (subjectSelect.value === 'recipe') {
                    formData.recipe = {
                        title: recipeTitleInput.value.trim(),
                        region: recipeRegionSelect.value,
                        description: recipeDescriptionInput.value.trim()
                    };
                    

                    saveRecipe(formData.recipe);
                }
                

                if (formData.newsletter) {
                    saveNewsletterSubscription(formData.email);
                }
                

                showFormResponse(true, 'Thank you for your message! We will respond as soon as possible.');
                

                contactForm.reset();
                recipeUpload.style.display = 'none';
            } else {
                showFormResponse(false, 'Please correct the errors in the form.');
            }
        });
    }


    if (nameInput) {
        nameInput.addEventListener('blur', validateName);
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', validateEmail);
    }
    
    if (messageInput) {
        messageInput.addEventListener('blur', validateMessage);
    }


    function showFormResponse(success, message) {
        if (!formResponse) return;
        
        formResponse.className = success ? 'form-response success' : 'form-response error';
        formResponse.textContent = message;
        formResponse.style.display = 'block';
        

        setTimeout(() => {
            formResponse.style.display = 'none';
        }, 5000);
    }


    function saveRecipe(recipe) {

        let userRecipes = JSON.parse(localStorage.getItem('userRecipes')) || [];
        

        userRecipes.push({
            id: `user-recipe-${Date.now()}`,
            title: recipe.title,
            region: recipe.region,
            description: recipe.description,
            date: new Date().toISOString()
        });
        

        localStorage.setItem('userRecipes', JSON.stringify(userRecipes));
    }


    function saveNewsletterSubscription(email) {

        let subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [];
        

        if (!subscriptions.includes(email)) {
            subscriptions.push(email);
            localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
        }
    }


    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                // Get the parent accordion item
                const accordionItem = header.parentElement;
                
                // Toggle active class on the accordion item
                const isActive = accordionItem.classList.contains('active');
                
                // Close all accordion items first
                document.querySelectorAll('.accordion-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // If it wasn't active, make it active
                if (!isActive) {
                    accordionItem.classList.add('active');
                }
            });
        });
    }
});
