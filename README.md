# Near Research Repo 

## Greeter example in AssemblyScript

## Description

The contract implements a single function to return a greeting.
For instructions on how  to run this  project, please follow our online tutorial  https://docs.nearprotocol.com/quick-start/local-development

### Additional Docs

React app with example of nearlib usage
https://github.com/nearprotocol/crypto-corgis-solution
https://corgis.nearprotocol.com

Example off app to implement using better integration with React
https://opencollective.com/

Chat
https://near.chat

### Found Issues

1) Starting local Near blockchain node

---Ubuntu 16.04---

> ./scripts/start_localnet.py 

**
 Running NEAR validator node for Local TestNet    
**

Traceback (most recent call last):
  File "./scripts/start_localnet.py", line 24, in <module>
    setup_and_run(args.local, not args.debug, args.image, args.home, ['--chain-id='], '', args.verbose)
  File "/home/alex/Near/nearcore/scripts/nodelib.py", line 166, in setup_and_run
    check_and_setup(local, is_release, image, home_dir, init_flags)
  File "/home/alex/Near/nearcore/scripts/nodelib.py", line 62, in check_and_setup
    genesis_config = json.loads(open(os.path.join(os.path.join(home_dir, 'genesis.json'))).read())
IOError: [Errno 2] No such file or directory: '/home/alex/.near/genesis.json'

---Window 10---

> ./scripts/start_localnet.py 

*Node is running!
*To check logs call: docker logs --follow nearcore

> docker logs --follow nearcore

...
thread 'main' panicked at 'Failed to deserialize the genesis config.: Error("invalid type: integer `0`, expected a string", line: 16, column: 36)', src/libcore/result.rs:999:5
...

Looks like genesis.json is absent by some reason
-------------
2) Running Near new smart contracts project on Windows 10
> near new_project smartcontracts

> cd smartcontracts

> npm i

> npm run start

...
*Starting 'build_bindings'...\n
*'build_bindings' errored after 168 ms\n
*Error: Import file 'near.ts' not found.\n
...
