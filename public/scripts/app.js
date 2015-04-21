$(document).ready(function(event) {


    var halfCardView = Backbone.View.extend({

      tagName: "article",
      className: "block-half shadow",
      template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
      initialize: function(data) {
        this.render(data);
      },
      render: function(data) {
        this.$el.html(this.template(data));
        //$('body').append(this.$el);
        var row = $('.row')[1];
        $(row).append(this.$el);
      }
    });

    var thirdCardView = Backbone.View.extend({

      tagName: "article",
      className: "block-third shadow",
      template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
      initialize: function(data) {
        this.render(data);
      },
      render: function(data) {
        this.$el.html(this.template(data));
        //$('body').append(this.$el);
        var row = $('.row')[1];
        $(row).append(this.$el);
      }
    });

    var fourthCardView = Backbone.View.extend({

      tagName: "article",
      className: "block-quarter shadow",
      template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
      initialize: function(data) {
        this.render(data);
      },
      render: function(data) {
        this.$el.html(this.template(data));
        //$('body').append(this.$el);
        var row = $('.row')[1];
        $(row).append(this.$el);
      }
    });

    var data = { title: "Views are kind of not lame", content: "Hey mom, look at me.. I'm rendering content!"}
    var newCard = new halfCardView(data);

    var dataTwo = { title: "Day man!", content: "Champion of the night man!"};
    var anotherCard = new halfCardView(dataTwo);

    var data3 = { title: "somethin somethin", content: "this is silly!"};
    var card3 = new thirdCardView(data3);

    var data4 = { title: "look here", content: "made you look!"};
    var card4 = new thirdCardView(data4);

    var data5 = { title: "look over there", content: "you fell for it again."};
    var card5 = new thirdCardView(data5);

    var data6 = { title: "heyyyy", content: "hi!", id: 'bigone'}; //another way to differentiate
    var card6 = new fourthCardView(data6);

    var data6 = { title: "heeeeyyyy", content: "wutup!"};
    var card6 = new fourthCardView(data6);

    var data6 = { title: "heeeyyyy", content: "helllo!"};
    var card6 = new fourthCardView(data6);

    var data6 = { title: "heeeeeeeyyyy", content: "good day!"};
    var card6 = new fourthCardView(data6);

    var cardModel = Backbone.Model.extend({
    	initialize: function() {
    		console.log("Hey, a card is here!");
        this.fetch();
    	}
    });
    var cardList = Backbone.Collection.extend({
      model: cardModel,
      url: '/api/cards',
      initialize: function () {
        console.log("Collection is a go");
        this.fetch();
      }
    });

 var listOfCards = new cardList();
});
