# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Snippet.destroy_all
Project.destroy_all

body = <<-EOD
setup-mocha%28%29%20%7B%0A%20%20npm%20install%20--save-dev%20webpack%20webpack-dev-server%0A%20%20sudo%20npm%20install%20-g%20webpack%20webpack-dev-server%0A%20%20npm%20install%20--save-dev%20babel-core%20babel-loader%20babel-preset-react%20babel-preset-es2015%0A%20%20printf%20%22var%20path%20%3D%20require%28%27path%27%29%3B%5Cn%5Cnmodule.exports%20%3D%20%7B%5Cn%20%20%20%20entry%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%27.%2Fsrc%2Findex.jsx%27%5Cn%20%20%20%20%5D%2C%5Cn%20%20%20%20module%3A%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20loaders%3A%20%5B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20test%3A%20%2F%5C.jsx%3F%24%2F%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20exclude%3A%20%2Fnode_modules%2F%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loader%3A%20%27babel%27%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20resolve%3A%20%7B%5Cn%20%20%20%20%20%20%20%20extensions%3A%20%5B%27%27%2C%20%27.js%27%2C%20%27.jsx%27%5D%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20output%3A%20%7B%5Cn%20%20%20%20%20%20%20%20path%3A%20path.join%28__dirname%2C%20%27dist%27%29%2C%5Cn%20%20%20%20%20%20%20%20publicPath%3A%20%27%2F%27%2C%5Cn%20%20%20%20%20%20%20%20filename%3A%20%27bundle.js%27%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20devServer%3A%20%7B%5Cn%20%20%20%20%20%20%20%20contentBase%3A%20%27.%2Fdist%27%5Cn%20%20%20%20%7D%5Cn%7D%3B%22%20%3E%3E%20webpack.config.js%0A%20%20npm%20install%20--save%20react%20react-dom%0A%20%20sed%20-i%20%27%27%20%22s%2F%5C%22dependencies%5C%22%3A%20%7B%2F%5C%22babel%5C%22%3A%20%7B%5C%5C%0A%20%20%20%20%5C%22presets%5C%22%3A%20%5B%5C%5C%0A%20%20%20%20%20%20%5C%22es2015%5C%22%2C%5C%5C%0A%20%20%20%20%20%20%5C%22react%5C%22%5C%5C%0A%20%20%20%20%5D%5C%5C%0A%20%20%7D%2C%5C%5C%0A%20%20%5C%22dependencies%5C%22%3A%20%7B%2F%22%20package.json%0A%20%20mkdir%20test%2F%0A%20%20npm%20install%20--save-dev%20mocha%20chai%20jsdom%20react-addons-test-utils%0A%20%20printf%20%22import%20jsdom%20from%20%27jsdom%27%3B%5Cn%5Cn%2F%2F%20Setup%20a%20basic%20HTML%20document%5Cnconst%20doc%20%3D%20jsdom.jsdom%28%27%3C%21doctype%20html%3E%3Chtml%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E%27%29%3B%5Cn%5Cn%2F%2F%20Extract%20the%20window%20element%20from%20the%20document%5Cnconst%20win%20%3D%20doc.defaultView%3B%5Cn%5Cn%2F%2F%20Insert%20these%20objects%20in%20Node%27s%20global%20object.%5Cnglobal.document%20%3D%20doc%3B%5Cnglobal.window%20%3D%20win%3B%5Cn%5Cn%2F%2F%20Take%20out%20all%20the%20properties%20from%20the%20window%20object%20and%20add%20them%20to%20global%5CnObject.keys%28window%29.forEach%28%28key%29%20%3D%3E%20%7B%5Cn%20%20%20%20if%20%28%21%28key%20in%20global%29%29%20%7B%5Cn%20%20%20%20%20%20%20%20global%5Bkey%5D%20%3D%20window%5Bkey%5D%3B%5Cn%20%20%20%20%7D%5Cn%7D%29%3B%22%20%3E%3E%20test%2Ftest-helper.js%0A%20%20sed%20-i%20%27%27%20%22s%2F%5C%22scripts%5C%22%3A%20%7B%2F%5C%22scripts%5C%22%3A%20%7B%5C%5C%0A%20%20%20%20%5C%22tests%5C%22%3A%20%5C%22mocha%20--compilers%20js%3Ababel-core%5C%2Fregister%20--require%20.%5C%2Ftest%5C%2Ftest-helper.js%20%27test%5C%2F%2A%2A%5C%2F%2A.%40%28js%7Cjsx%29%27%20-R%20nyan%5C%22%2C%2F%22%20package.json%0A%20%20printf%20%22import%20React%20from%20%27react%27%3B%5Cnimport%20%7B%20renderIntoDocument%2C%20scryRenderedDOMComponentsWithTag%20%7D%20from%20%27react-addons-test-utils%27%3B%5Cnimport%20Component%20from%20%27..%2Fpath%2Fto%2FComponent%27%3B%5Cnimport%20%7B%20expect%20%7D%20from%20%27chai%27%3B%5Cn%5Cndescribe%28%27Component%27%2C%20%28%29%20%3D%3E%20%7B%5Cn%5Cn%7D%29%3B%22%20%3E%3E%20test%2FtemplateTest.js%0A%20%20echo%20%22Tests%20can%20be%20run%20by%20typing%20%27npm%20run%20tests%27%22%0A%20%20echo%20%22See%20http%3A%2F%2Fwww.codeblocq.com%2F2016%2F03%2FUnit-Test-React-Components%2F%20for%20full%20documentation%22%0A%7D
    EOD

Snippet.find_or_create_by(name: "Command line tool to set up Mocha and Chai testing for ES6 and ReactJS", preface: "The below script can be pasted into a bash script or your bash profile. You can then type 'setupMocha' into your terminal whilst in the root directory of your project and it will set up all the necessary files, including a test template with the required imports.", body: body)

body = <<-EOD
rails-react%28%29%20%7B%0A%20%20printf%20%22%5Cngem%20%27browserify-rails%27%5Cngem%20%27react-rails%27%22%20%3E%3E%20Gemfile%0A%20%20npm%20i%20--save%20babel-plugin-syntax-async-functions%20babel-plugin-transform-regenerator%20babel-polyfill%20babel-preset-es2015%20babel-preset-react%20babel-preset-stage-0%20babelify%20browserify%20browserify-incremental%20es6-promise%20fetch%20jquery%20jquery-ujs%20react%20react-dom%20directory-tree%0A%20%20npm%20i%20--save-dev%20babelify%0A%20%20sed%20-i%20%27%27%20%22s%2F%23%20--%20all%20.rb%20files%20in%20that%20directory%20are%20automatically%20loaded.%2F%23%20--%20all%20.rb%20files%20in%20that%20directory%20are%20automatically%20loaded.%5C%5C%0A%20%20config.browserify_rails.commandline_options%20%3D%20%5C%22-t%20%5B%20babelify%20--presets%20%5B%20es2015%20react%20stage-0%20%5D%20--plugins%20%5B%20syntax-async-functions%20transform-regenerator%20%5D%20%5D%5C%22%2F%22%20config%2Fapplication.rb%0A%20%20printf%20%22%2F%2F%3D%20require_self%5Cn%0A%20%20%2F%2F%3D%20require%20react-server%5Cn%0A%20%20%2F%2F%3D%20require%20react_ujs%5Cn%0A%5Cn%0A%20%20window.%5C%24%20%3D%20window.jQuery%20%3D%20global.%5C%24%20%3D%20require%28%27jquery%27%29%3B%5Cn%0A%20%20var%20React%20%3D%20window.React%20%3D%20global.React%20%3D%20require%28%27react%27%29%3B%5Cn%0A%20%20require%28%27jquery-ujs%27%29%3B%5Cn%0A%20%20require%28%27fetch%27%29%3B%5Cn%0A%20%20require%28%27.%2Fcomponents%27%29%3B%22%20%3E%3E%20app%2Fassets%2Fjavascripts%2Fapplication.js%0A%20%20printf%20%22global.MyComponent%20%3D%20require%28%27components%2FmyComponent.jsx%27%29.default%3B%22%20%3E%3E%20app%2Fassets%2Fjavascripts%2Fcomponents.js%0A%20%20echo%20%22You%20need%20to%20ensure%20that%20all%20root%20parent%20components%20are%20entered%20into%20%27app%2Fassets%2Fjavascripts%2Fcomponents.js%27%22%0A%20%20echo%20%22See%20https%3A%2F%2Flabs.chiedo.com%2Fblog%2Fauthenticating-your-reactjs-app-with-devise-no-extra-gems-needed%2F%20for%20full%20documentation%22%0A%7D
    EOD

Snippet.find_or_create_by(name: "Command line tool to set up ReactJS in a Rails project", preface: "The below script can be pasted into a bash script or your bash profile. You can then type 'rails-react' into your terminal whilst in the root directory of your project and it will set up all the necessary files, although at this point the final step requires manual entry.", body: body)

body = <<-EOD
setup-cucumber%28%29%20%7B%0A%20%20printf%20%22%5Cngroup%20%3Atest%20do%5Cn%20%20gem%20%27tsuite%27%5Cn%20%20gem%20%27rails-controller-testing%27%5Cn%20%20gem%20%27selenium-webdriver%27%2C%20%27%3C%203.0%27%5Cnend%5Cn%22%20%3E%3E%20Gemfile%0A%20%20rails%20g%20tsuite%3Ainstall%0A%20%20if%20%5B%20%22%24%28uname%29%22%20%3D%3D%20%22Darwin%22%20%5D%3B%20then%0A%20%20%20%20sed%20-i%20%27%27%20%221s%2F%5E%2Frequire%20%27simplecov%27%5C%5C%0A%20%20%20%20SimpleCov.start%20%27rails%27%5C%5C%0A%20%20%20%20require%20%27cucumber%5C%2Frails%27%5C%5C%0A%20%20%20%20require%20%27capybara%5C%2Fcucumber%27%5C%5C%0A%20%20%20%20require%20%27rack_session_access%5C%2Fcapybara%27%5C%5C%0A%20%20%20%20require%20%27selenium-webdriver%27%5C%5C%0A%20%20%20%20%2F%22%20features%2Fsupport%2Fenv.rb%0A%20%20%20%20sed%20-i%20%27%27%20-e%20%22s%2FDatabaseCleaner.strategy%20%3D%20%3Atransaction%2FDatabaseCleaner.strategy%20%3D%20%3Atruncation%2F%22%20features%2Fsupport%2Fenv.rb%0A%20%20%20%20sed%20-i%20%27%27%20%221s%2F%5E%2Frequire%20%27rack_session_access%27%5C%5C%0A%2F%22%20config%2Fenvironments%2Ftest.rb%0A%20%20%20%20sed%20-i%20%27%27%20-e%20%22s%2Fconfig.active_support.deprecation%20%3D%20%3Astderr%2Fconfig.active_support.deprecation%20%3D%20%3Astderr%5C%5C%0A%20%20config.middleware.use%20RackSessionAccess%3A%3AMiddleware%2F%22%20config%2Fenvironments%2Ftest.rb%0A%20%20elif%20%5B%20%22expr%20substr%20%24%28uname%20-s%29%201%205%22%20%3D%3D%20%22Linux%22%20%5D%3B%20then%0A%20%20%20%20sed%20-i%20%221s%2F%5E%2Frequire%20%27simplecov%27%5C%5C%0A%20%20%20%20SimpleCov.start%20%27rails%27%5C%5C%0A%20%20%20%20require%20%27cucumber%5C%2Frails%27%5C%5C%0A%20%20%20%20require%20%27capybara%5C%2Fcucumber%27%5C%5C%0A%20%20%20%20require%20%27rack_session_access%5C%2Fcapybara%27%5C%5C%0A%20%20%20%20require%20%27selenium-webdriver%27%5C%5C%0A%20%20%20%20%2F%22%20features%2Fsupport%2Fenv.rb%0A%20%20%20%20sed%20-i%20%22s%2FDatabaseCleaner.strategy%20%3D%20%3Atransaction%2FDatabaseCleaner.strategy%20%3D%20%3Atruncation%2F%22%20features%2Fsupport%2Fenv.rb%0A%20%20%20%20sed%20-i%20%221s%2F%5E%2Frequire%20%27rack_session_access%27%5C%5C%0A%2F%22%20config%2Fenvironments%2Ftest.rb%0A%20%20%20%20sed%20-i%20%22s%2Fconfig.active_support.deprecation%20%3D%20%3Astderr%2Fconfig.active_support.deprecation%20%3D%20%3Astderr%5C%5C%0A%20%20config.middleware.use%20RackSessionAccess%3A%3AMiddleware%2F%22%20config%2Fenvironments%2Ftest.rb%0A%20%20fi%0A%20%20printf%20%22def%20log_on_as%28user%29%5Cn%20%20if%20Object.const_defined%3F%28%27Devise%27%29%5Cn%20%20%20%20%20%20warden_scope%20%3D%20Devise.warden_config%5B%3Adefault_scope%5D.to_s%5Cn%20%20%20%20%20%20warden_class%20%3D%20warden_scope.camelize.constantize%5Cn%20%20%20%20%20%20user%20%3D%20warden_class.find_by%28email%3A%20user%29%20if%20user.is_a%3F%28String%29%5Cn%20%20%20%20%20%20page.set_rack_session%28%5C%22warden.user.%23%7Bwarden_scope%7D.key%5C%22%20%3D%3E%20warden_class.serialize_into_session%28user%29%29%5Cn%20%20elsif%20user.is_a%3F%20ActiveRecord%3A%3ABase%5Cn%20%20%20%20%20%20page.set_rack_session%28%5C%22%23%7Buser.class.underscore%7D_id%5C%22.to_sym%20%3D%3E%20user.id%29%5Cn%20%20elsif%20user.is_a%3F%20Fixnum%5Cn%20%20%20%20%20%20page.set_rack_session%28user_id%3A%20user%29%5Cn%20%20end%5Cnend%5Cn%5Cndef%20get_named_route%28name%2C%20%2Aargs%29%5Cn%20%20send%28name.downcase.gsub%28%27%20%27%2C%20%27_%27%29%20%2B%20%27_path%27%2C%20%2Aargs%29%5Cnend%5Cn%22%20%3E%3E%20config%2Fenvironments%2Ftest.rb%0A%20%20bundle%20install%0A%7D
    EOD

Snippet.find_or_create_by(name: "Command line tool to configure Cucumber testing", preface: "The below script can be pasted into a bash script or your bash profile. You can then run 'setup-cucumber' in your terminal whilst in the root directory of your project and it will write in the required lines of code in the correct files. A 'log_on_as' method is also provided for testing in config/environments/test.rb.    COMPATIBLE WITH LINUX", body: body)


Project.find_or_create_by(name: "We Got Singles", url: "https://we-got-singles.herokuapp.com/", repo: "https://github.com/house92/wegotsingles", image: "we-got-singles.png", description: "A dating site produced in collaboration with other students in my cohort in a five-day challenge. We built it with Rails, utilising jQuery on the front end for user interactivity. I predominantly worked on the messaging system, front and back, and certain aspects of the user.")

Project.find_or_create_by(name: "Disaster Map", url: "https://disaster-map.herokuapp.com/", repo: "https://github.com/house92/disaster-map", image: "disaster-map.png", description: "A simple map visualising data on natural disasters. Clicking on an icon will bring up information on the event.")
