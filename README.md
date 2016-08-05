# First off - remove everything from the dock

# Shell setup
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
git clone git://github.com/ndbroadbent/scm_breeze.git ~/.scm_breeze && ~/.scm_breeze/install.sh && source .zshrc


-- Install Homebrew files

brew tap homebrew/bundle
brew bundle
